package com.team3.project.services.window;

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

import com.team3.project.domain.Room;
import com.team3.project.domain.Window;
import com.team3.project.domain.WindowOpen;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.exception.RoomException;
import com.team3.project.exception.WindowException;
import com.team3.project.repositories.WindowOpenRepository;
import com.team3.project.repositories.WindowRepository;
import com.team3.project.utils.Utils;

import jakarta.annotation.Resource;

/**
 * Service implementation for managing rooms.
 */
@Service
public class WindowServiceImpl implements WindowService {
    /**
     * Repository for managing WindowOpen entities.
     */
    @Resource
    private WindowOpenRepository windowOpenRepository;

    /**
     * Repository for managing Window entities.
     */
    @Resource
    private WindowRepository windowRepository;

    /**
     * Retrieves information about open windows by their ID.
     *
     * @param id the ID of the window
     * @return a list of WindowOpen objects containing information about the
     *         open windows
     */
    @Override
    public List<WindowOpen> getOpenInfoByWindowId(final Integer id) {
        return windowOpenRepository.findAllByWindowId(id);
    }

    /**
     * Imports data from an Excel workbook.
     *
     * @param workbook the Excel workbook containing the data
     * @param roomMap  a map of room names to their corresponding IDs
     */
    @Override
    public void importData(final XSSFWorkbook workbook,
            final Map<String, Integer> roomMap) {

        XSSFSheet worksheet = workbook.getSheet("Window");
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            XSSFRow row = worksheet.getRow(i);
            Integer id = (int) row.getCell(0).getNumericCellValue();
            Window window = windowRepository.findById(id).orElse(null);
            if (window == null) {
                window = new Window();
                window.setId(id);
            }
            Integer roomId = roomMap
                    .get(row.getCell(1).getStringCellValue().toLowerCase());
            if (roomId == null) {
                throw new RoomException();
            }
            window.setRoomId(roomId);
            windowRepository.save(window);
        }

        worksheet = workbook.getSheet("WindowOpen");
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            XSSFRow row = worksheet.getRow(i);
            LocalDateTime date = Utils.convertToLocalDateTime(
                    row.getCell(0).getStringCellValue());
            Integer windowId = (int) row.getCell(1).getNumericCellValue();
            boolean isOpen = row.getCell(2).getStringCellValue()
                    .equals("true");
            WindowOpen windowOpen = windowOpenRepository
                    .findByTimeStampAndWindowId(date, windowId);
            if (windowOpen == null) {
                windowOpen = WindowOpen.builder().timeStamp(date)
                        .windowId(windowId).isOpen(isOpen).build();
                windowOpenRepository.save(windowOpen);
            }
        }
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
        // Create and populate the "Window" sheet
        Sheet sheet = workbook.createSheet("Window");
        int i = 0;
        Row row = sheet.createRow(i++);
        row.createCell(0).setCellValue("ID");
        row.createCell(1).setCellValue("Room_Id");
        for (Window window : windowRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(window.getId());
            row.createCell(1).setCellValue(roomMap.get(window.getRoomId()));
        }

        // Create and populate the "WindowOpen" sheet
        sheet = workbook.createSheet("WindowOpen");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue("Timestamp");
        row.createCell(1).setCellValue("Window_ID");
        row.createCell(2).setCellValue("isOpen");
        for (WindowOpen windowOpen : windowOpenRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0)
                    .setCellValue(Utils.convertToLocalDateTimeString(
                            windowOpen.getTimeStamp()));
            row.createCell(1).setCellValue(windowOpen.getWindowId());
            row.createCell(2).setCellValue(
                    windowOpen.isOpen() ? "true" : "false");
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
        // List of Window entities associated with the room
        List<Window> windowCheck = new ArrayList<>(room.getWindows());

        // Iterate through each OpenDTO in the roomDTO
        for (OpenDTO data : roomDTO.getWindows()) {
            Window window = null;

            // Check if the window already exists
            if (data.getId() != null && data.getId() != 0) {
                window = checkAndGetWindow(data.getId(), windowCheck);
            } else {
                // Create a new Window entity if it does not exist
                window = new Window();
                window.setRoomId(room.getId());
                windowRepository.save(window);
                room.getWindows().add(window);
            }

            if (data.getIsOpen() == null) {
                continue;
            }

            // Determine if the window should be open
            boolean open = data.getIsOpen();
            WindowOpen lastOpen = windowOpenRepository
                    .findFirstByWindowIdOrderByTimeStampDesc(window.getId());
            if (lastOpen != null && lastOpen.isOpen() == open) {
                continue;
            }

            // Create a new WindowOpen entity and save it
            WindowOpen windowOpen = new WindowOpen();
            windowOpen.setWindowId(window.getId());
            windowOpen.setOpen(open);
            windowOpen.setTimeStamp(LocalDateTime.now());
            windowOpenRepository.save(windowOpen);
        }

        // Delete all remaining WindowOpen associations
        for (Window window : windowCheck) {
            windowOpenRepository.deleteAll(window.getWindowOpens());
        }

        // Delete all remaining Window entities
        windowRepository.deleteAll(windowCheck);
    }

    @Override
    public final void setStatus(final OpenDTO openDTO) {
        if (openDTO.getId() == null) {
            throw new WindowException("Window id is null");
        }

        if (openDTO.getIsOpen() == null) {
            throw new WindowException("Window status is null");
        }
        WindowOpen latestRecord = windowOpenRepository
                .findFirstByWindowIdOrderByTimeStampDesc(openDTO.getId());
        WindowOpen newRecord = null;
        if (latestRecord != null) {
            if (!openDTO.getIsOpen().equals(latestRecord.isOpen())) {
                newRecord = new WindowOpen();
            }
        } else {
            newRecord = new WindowOpen();
        }
        if (newRecord != null) {
            newRecord.setWindowId(openDTO.getId());
            newRecord.setTimeStamp(LocalDateTime.now());
            newRecord.setOpen(openDTO.getIsOpen());
            windowOpenRepository.save(newRecord);
        }
    }

    private Window checkAndGetWindow(final Integer id,
            final List<Window> windowCheck) {
        Window window = null;
        for (Window window2 : windowCheck) {
            if (window2.getId().equals(id)) {
                window = window2;
                windowCheck.remove(window2);
                break;
            }
        }

        if (window == null) {
            throw new WindowException();
        }
        return window;
    }
}
