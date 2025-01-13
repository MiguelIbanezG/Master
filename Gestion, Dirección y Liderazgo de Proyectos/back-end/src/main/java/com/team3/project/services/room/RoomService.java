package com.team3.project.services.room;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.team3.project.domain.Room;
import com.team3.project.domain.dto.RoomDTO;

/**
 * Service interface for managing room operations.
 */
public interface RoomService {

    /**
     * Imports data from an Excel file.
     *
     * @param reapExcelDataFile the Excel file to import
     * @throws IOException if an I/O error occurs
     */
    void importData(MultipartFile reapExcelDataFile) throws IOException;

    /**
     * Saves a room.
     *
     * @param roomDTO the room data transfer object
     * @return the saved Room entity
     */
    Room save(RoomDTO roomDTO);

    /**
     * Retrieves a room data transfer object by its ID.
     *
     * @param id the ID of the room
     * @return the RoomDTO object
     */
    RoomDTO getDTO(Integer id);

    /**
     * Deletes a room by its ID.
     *
     * @param id the ID of the room
     */
    void delete(Integer id);

    /**
     * Finds a room by its ID.
     *
     * @param id the ID of the room
     * @return the Room entity
     */
    Room findOne(Integer id);

    /**
     * Retrieves all rooms.
     *
     * @return a list of Room entities
     */
    List<Room> findAll();

    /**
     * Generates random values for a room by its ID.
     *
     * @param id the ID of the room
     */
    void generateRandomRoomValues(Integer id);

    /**
     * Exports data to a byte array.
     *
     * @return a ResponseEntity containing the byte array of exported data
     * @throws IOException if an I/O error occurs
     */
    ResponseEntity<byte[]> exportData() throws IOException;

    /**
     * Retrieves a list of alarm messages.
     *
     * @return a list of alarm messages
     */
    List<String> alarm();
}
