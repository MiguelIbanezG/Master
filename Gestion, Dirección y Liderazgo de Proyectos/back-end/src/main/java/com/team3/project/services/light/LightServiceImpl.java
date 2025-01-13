package com.team3.project.services.light;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import com.team3.project.domain.Light;
import com.team3.project.domain.LightOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.exception.LightException;
import com.team3.project.repositories.LightOpenRepository;
import com.team3.project.repositories.LightRepository;
import com.team3.project.utils.Utils;

import jakarta.annotation.Resource;

/**
 * Service implementation for managing light operations.
 */
@Service
public class LightServiceImpl implements LightService {
    /**
     * Repository for managing LightOpen entities.
     */
    @Resource
    private LightOpenRepository lightOpenRepository;

    /**
     * Repository for managing Light entities.
     */
    @Resource
    private LightRepository lightRepository;

    /**
     * Retrieves the open information for a specific light by its ID.
     *
     * @param id the ID of the light
     * @return a list of LightOpen objects containing the open information
     */
    @Override
    public List<LightOpen> getOpenInfoByLightId(final Integer id) {
        return lightOpenRepository.findAllByLightId(id);
    }

    /**
     * Exports data to an Excel workbook.
     *
     * @param workbook the Excel workbook to which the data will be exported
     * @param roomMap  a map of room IDs to their corresponding names
     */
    @Override
    public void exportData(final XSSFWorkbook workbook,
            final Map<Integer, String> roomMap) {
        // Create and populate the "light" sheet
        Sheet sheet = workbook.createSheet("Light");
        int i = 0;
        Row row = sheet.createRow(i++);
        row.createCell(0).setCellValue("ID");
        row.createCell(1).setCellValue("Room_Id");
        for (Light light : lightRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(light.getId());
            row.createCell(1).setCellValue(roomMap.get(light.getRoomId()));
        }

        // Create and populate the "LightOpen" sheet
        sheet = workbook.createSheet("LightOpen");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue("Timestamp");
        row.createCell(1).setCellValue("Light_ID");
        row.createCell(2).setCellValue("isOpen");
        for (LightOpen lightOpen : lightOpenRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0)
                    .setCellValue(Utils.convertToLocalDateTimeString(
                            lightOpen.getTimeStamp()));
            row.createCell(1).setCellValue(lightOpen.getLightId());
            row.createCell(2).setCellValue(
                    lightOpen.isOpen() ? "true" : "false");
        }
    }

    /**
     * Saves the given RoomDTO and Room entities.
     *
     * @param roomDTO the data transfer object containing room information
     * @param room    the Room entity to be saved
     */
    @Override
    public void save(final RoomDTO roomDTO, final Room room) {
        // List of Light entities associated with the room
        List<Light> lightCheck = new ArrayList<>(room.getLights());

        // Iterate through each OpenDTO in the roomDTO
        for (OpenDTO data : roomDTO.getLights()) {
            Light light = null;

            // Check if the light already exists
            if (data.getId() != null && data.getId() != 0) {
                light = checkAndGetLight(data.getId(), lightCheck);
            } else {
                // Create a new Light entity if it does not exist
                light = new Light();
                light.setRoomId(room.getId());
                lightRepository.save(light);
                room.getLights().add(light);
            }

            if (data.getIsOpen() == null) {
                continue;
            }

            // Determine if the light should be open
            boolean open = data.getIsOpen();
            LightOpen lastOpen = lightOpenRepository
                    .findFirstByLightIdOrderByTimeStampDesc(light.getId());
            if (lastOpen != null && lastOpen.isOpen() == open) {
                continue;
            }

            // Create a new LightOpen entity and save it
            LightOpen lightOpen = new LightOpen();
            lightOpen.setLightId(light.getId());
            lightOpen.setOpen(open);
            lightOpen.setTimeStamp(LocalDateTime.now());
            lightOpenRepository.save(lightOpen);
        }

        // Delete all remaining LightOpen associations
        for (Light light : lightCheck) {
            lightOpenRepository.deleteAll(light.getLightOpens());
        }

        // Delete all remaining Light entities
        lightRepository.deleteAll(lightCheck);
    }

    @Override
    public final void setStatus(final OpenDTO openDTO) {
        if (openDTO.getId() == null) {
            throw new LightException("Light id is null");
        }

        if (openDTO.getIsOpen() == null) {
            throw new LightException("Light status is null");
        }
        LightOpen latestRecord = lightOpenRepository
                .findFirstByLightIdOrderByTimeStampDesc(openDTO.getId());
        LightOpen newRecord = null;
        if (latestRecord != null) {
            if (!openDTO.getIsOpen().equals(latestRecord.isOpen())) {
                newRecord = new LightOpen();
            }
        } else {
            newRecord = new LightOpen();
        }
        if (newRecord != null) {
            newRecord.setLightId(openDTO.getId());
            newRecord.setTimeStamp(LocalDateTime.now());
            newRecord.setOpen(openDTO.getIsOpen());
            lightOpenRepository.save(newRecord);
        }
    }

    private Light checkAndGetLight(final Integer id,
            final List<Light> lightCheck) {
        Light light = null;
        for (Light light2 : lightCheck) {
            if (light2.getId().equals(id)) {
                light = light2;
                lightCheck.remove(light2);
                break;
            }
        }
        if (light == null) {
            throw new LightException();
        }
        return light;
    }
}
