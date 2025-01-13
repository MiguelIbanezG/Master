package com.team3.project.services.light;

import com.team3.project.domain.LightOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import java.util.List;
import java.util.Map;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * Service interface for managing light operations.
 */
public interface LightService {

    /**
     * Retrieves the open information for a specific light by its ID.
     *
     * @param id the ID of the light
     * @return a list of LightOpen objects containing the open information
     */
    List<LightOpen> getOpenInfoByLightId(Integer id);

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

    /**
     * Set light open status.
     *
     * @param openDTO the info of the light
     */
    void setStatus(OpenDTO openDTO);
}
