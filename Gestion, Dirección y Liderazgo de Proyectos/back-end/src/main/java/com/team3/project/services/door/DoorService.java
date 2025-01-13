package com.team3.project.services.door;

import com.team3.project.domain.DoorOpen;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.RoomDTO;
import java.util.List;
import java.util.Map;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * Service interface for managing door operations.
 */
public interface DoorService {

    /**
     * Retrieves the open information for a specific door by its ID.
     *
     * @param id the ID of the door
     * @return a list of DoorOpen objects containing the open information
     */
    List<DoorOpen> getOpenInfoByDoorId(Integer id);

    /**
     * Set door open status.
     *
     * @param openDTO the info of the door
     */
    void setStatus(OpenDTO openDTO);


    /**
     * Opens all doors.
     */
    void openAllDoor();

    /**
     * Imports data from an Excel workbook.
     *
     * @param workbook the Excel workbook containing the data
     * @param roomMap a map of room names to their corresponding IDs
     */
    void importData(XSSFWorkbook workbook, Map<String, Integer> roomMap);

    /**
     * Exports data to an Excel workbook.
     *
     * @param workbook the Excel workbook to which the data will be exported
     * @param roomMap a map of room IDs to their corresponding names
     */
    void exportData(XSSFWorkbook workbook, Map<Integer, String> roomMap);

    /**
     * Saves the given RoomDTO and Room entities.
     *
     * @param roomDTO the data transfer object containing room information
     * @param room the Room entity to be saved
     */
    void save(RoomDTO roomDTO, Room room);
}
