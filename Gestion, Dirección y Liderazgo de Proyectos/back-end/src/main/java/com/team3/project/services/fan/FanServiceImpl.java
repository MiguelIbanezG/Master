package com.team3.project.services.fan;

import com.team3.project.domain.Fan;
import com.team3.project.domain.FanOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.exception.FanException;
import com.team3.project.exception.RoomException;
import com.team3.project.repositories.FanOpenRepository;
import com.team3.project.repositories.FanRepository;
import com.team3.project.utils.Utils;
import jakarta.annotation.Resource;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

/**
 * Service implementation for managing fan operations.
 */
@Service
public class FanServiceImpl implements FanService {
    /**
     * Repository for managing FanOpen entities.
     */
    @Resource
    private FanOpenRepository fanOpenRepository;

    /**
     * Repository for managing Fan entities.
     */
    @Resource
    private FanRepository fanRepository;

    /**
     * Retrieves the open information for a specific fan by its ID.
     *
     * @param id the ID of the fan
     * @return a list of FanOpen objects containing the open information
     */
    @Override
    public List<FanOpen> getOpenInfoByFanId(final Integer id) {
        return fanOpenRepository.findAllByFanId(id);
    }

    /**
     * Imports data from an Excel workbook.
     *
     * @param workbook the Excel workbook containing the data
     * @param roomMap a map of room names to their corresponding IDs
     */
    @Override
    public void importData(final XSSFWorkbook workbook,
            final Map<String, Integer> roomMap) {
        XSSFSheet worksheet = workbook.getSheet("Ventilator");
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            XSSFRow row = worksheet.getRow(i);
            Integer id = (int) row.getCell(0).getNumericCellValue();
            Fan fan = fanRepository.findById(id).orElse(null);
            if (fan == null) {
                fan = new Fan();
                fan.setId(id);
            }

            Integer roomId = roomMap
                    .get(row.getCell(1).getStringCellValue().toLowerCase());
            if (roomId == null) {
                throw new RoomException();
            }
            fan.setRoomId(roomId);
            fanRepository.save(fan);
        }

        worksheet = workbook.getSheet("VentilatorOn");
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            XSSFRow row = worksheet.getRow(i);
            LocalDateTime date = Utils.convertToLocalDateTime(
                    row.getCell(0).getStringCellValue());
            Integer fanId = (int) row.getCell(1).getNumericCellValue();
            boolean isOpen = row.getCell(2).getStringCellValue()
                    .equals("true");
            FanOpen fanOpen = fanOpenRepository
                    .findByTimeStampAndFanId(date, fanId);
            if (fanOpen == null) {
                fanOpen = FanOpen.builder().timeStamp(date).fanId(fanId)
                        .isOpen(isOpen).build();
                fanOpenRepository.save(fanOpen);
            }
        }
    }

    /**
     * Exports data to an Excel workbook.
     *
     * @param workbook the Excel workbook to which the data will be exported
     * @param roomMap a map of room IDs to their corresponding names
     */
    @Override
    public void exportData(final XSSFWorkbook workbook,
            final Map<Integer, String> roomMap) {
        // Create and populate the "Ventilator" sheet
        Sheet sheet = workbook.createSheet("Ventilator");
        int i = 0;
        Row row = sheet.createRow(i++);
        row.createCell(0).setCellValue("ID");
        row.createCell(1).setCellValue("Room_Id");
        for (Fan fan : fanRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(fan.getId());
            row.createCell(1).setCellValue(roomMap.get(fan.getRoomId()));
        }

        // Create and populate the "VentilatorOn" sheet
        sheet = workbook.createSheet("VentilatorOn");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue("Timestamp");
        row.createCell(1).setCellValue("VentilatorId");
        row.createCell(2).setCellValue("isOn");
        for (FanOpen fanOpen : fanOpenRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(Utils
                    .convertToLocalDateTimeString(fanOpen.getTimeStamp()));
            row.createCell(1).setCellValue(fanOpen.getFanId());
            row.createCell(2).setCellValue(fanOpen.isOpen() ? "true" : "false");
        }
    }

    /**
     * Saves the given RoomDTO and Room entities.
     *
     * @param roomDTO the data transfer object containing room information
     * @param room the Room entity to be saved
     */
    @Override
    public void save(final RoomDTO roomDTO, final Room room) {
        // List of Fan entities associated with the room
        List<Fan> fanCheck = new ArrayList<>(room.getFans());

        // Iterate through each OpenDTO in the roomDTO
        for (OpenDTO data : roomDTO.getFans()) {
            Fan fan = null;

            // Check if the fan already exists
            if (data.getId() != null && data.getId() != 0) {
                fan = checkAndGetFan(data.getId(), fanCheck);
            } else {
                // Create a new Fan entity if it does not exist
                fan = new Fan();
                fan.setRoomId(room.getId());
                fanRepository.save(fan);
                room.getFans().add(fan);
            }

            if (data.getIsOpen() == null) {
                continue;
            }

            // Determine if the fan should be open
            boolean open = data.getIsOpen();
            FanOpen lastOpen = fanOpenRepository
                    .findFirstByFanIdOrderByTimeStampDesc(fan.getId());
            if (lastOpen != null && lastOpen.isOpen() == open) {
                continue;
            }

            // Create a new FanOpen entity and save it
            FanOpen fanOpen = new FanOpen();
            fanOpen.setFanId(fan.getId());
            fanOpen.setOpen(open);
            fanOpen.setTimeStamp(LocalDateTime.now());
            fanOpenRepository.save(fanOpen);
        }

        // Delete all remaining FanOpen associations
        for (Fan fan : fanCheck) {
            fanOpenRepository.deleteAll(fan.getFanOpens());
        }

        // Delete all remaining Fan entities
        fanRepository.deleteAll(fanCheck);
    }

    @Override
    public final void setStatus(final OpenDTO openDTO) {
        if (openDTO.getId() == null) {
            throw new FanException("Fan id is null");
        }

        if (openDTO.getIsOpen() == null) {
            throw new FanException("Fan status is null");
        }
        FanOpen latestRecord = fanOpenRepository
                .findFirstByFanIdOrderByTimeStampDesc(openDTO.getId());
        FanOpen newRecord = null;
        if (latestRecord != null) {
            if (!openDTO.getIsOpen().equals(latestRecord.isOpen())) {
                newRecord = new FanOpen();
            }
        } else {
            newRecord = new FanOpen();
        }
        if (newRecord != null) {
            newRecord.setFanId(openDTO.getId());
            newRecord.setTimeStamp(LocalDateTime.now());
            newRecord.setOpen(openDTO.getIsOpen());
            fanOpenRepository.save(newRecord);
        }
    }

    private Fan checkAndGetFan(final int id, final List<Fan> fanCheck) {
        Fan fan = null;
        for (Fan fan2 : fanCheck) {
            if (fan2.getId().equals(id)) {
                fan = fan2;
                fanCheck.remove(fan2);
                break;
            }
        }
        if (fan == null) {
            throw new FanException();
        }
        return fan;
    }
}
