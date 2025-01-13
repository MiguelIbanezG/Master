package com.team3.project.controllers;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

import com.team3.project.domain.DoorOpen;
import com.team3.project.domain.FanOpen;
import com.team3.project.domain.LightOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.RoomCo2;
import com.team3.project.domain.RoomPeople;
import com.team3.project.domain.RoomTemperature;
import com.team3.project.domain.WindowOpen;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.exception.RoomException;
import com.team3.project.services.door.DoorService;
import com.team3.project.services.fan.FanService;
import com.team3.project.services.light.LightService;
import com.team3.project.services.room.RoomService;
import com.team3.project.services.window.WindowService;
import com.team3.project.utils.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.Resource;
import java.io.IOException;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/** REST controller for managing rooms. */
@RestController
@RequestMapping("/room")
@CrossOrigin(origins = "*")
public class RoomController {

    /** Service for managing room operations. */
    @Resource
    private RoomService roomService;

    /** Service for managing door operations. */
    @Resource
    private DoorService doorService;

    /** Service for managing fan operations. */
    @Resource
    private FanService fanService;

    /** Service for managing light operations. */
    @Resource
    private LightService lightService;

    /** Service for managing window operations. */
    @Resource
    private WindowService windowService;

    /**
     * Imports room data from an Excel file.
     *
     * @param reapExcelDataFile the Excel file containing room data
     * @return a result indicating success
     * @throws IOException if an I/O error occurs
     */
    @PostMapping(path = "/import", consumes = MULTIPART_FORM_DATA_VALUE)
    @Tag(name = "Generic", description = "Room management APIs")
    public Result<String> mapReapExcelDataToDB(
            @RequestParam("file") final MultipartFile reapExcelDataFile)
            throws IOException {
        roomService.importData(reapExcelDataFile);
        return Result.success();
    }

    /**
     * Lists all rooms.
     *
     * @return a result containing a list of room data transfer objects
     */
    @GetMapping(path = "/")
    @Tag(name = "Generic")
    @Operation(summary = "List all rooms")
    public Result<List<Room>> listRoom() {
        return Result.success(roomService.findAll());
    }

    /**
     * Creates a new room.
     *
     * @param roomDTO the room data transfer object
     * @return a result indicating success
     */
    @PostMapping(path = "/")
    @Tag(name = "Generic")
    @Operation(summary = "Create a room")
    public Result<String> createRoom(@RequestBody final RoomDTO roomDTO) {
        roomDTO.setId(null);
        roomService.save(roomDTO);
        return Result.success();
    }

    /**
     * Updates a room.
     *
     * @param id      the room ID
     * @param roomDTO the room data transfer object
     * @return a result indicating success
     */
    @PutMapping(path = "/{id}")
    @Tag(name = "Generic")
    @Operation(summary = "Update a room")
    public Result<String> fullUpdateRoom(
            @PathVariable("id") final Integer id,
            @RequestBody final RoomDTO roomDTO) {
        roomDTO.setId(id);
        roomService.save(roomDTO);
        return Result.success();
    }

    /**
     * Retrieves a room by its ID.
     *
     * @param id the room ID
     * @return a result containing the room data transfer object
     */
    @GetMapping(path = "/{id}")
    @Tag(name = "Generic")
    @Operation(summary = "Get a room by id")
    public Result<RoomDTO> getRoom(@PathVariable("id") final Integer id) {
        return Result.success(roomService.getDTO(id));
    }

    /**
     * Deletes a room by its ID.
     *
     * @param id the room ID
     * @return a result indicating success
     */
    @DeleteMapping(path = "/{id}")
    @Tag(name = "Generic")
    @Operation(summary = "Delete a room")
    public Result<String> deleteRoom(@PathVariable("id") final Integer id) {
        roomService.delete(id);
        return Result.success();
    }

    /**
     * Exports room data to an Excel file.
     *
     * @return a ResponseEntity containing the Excel file data
     * @throws IOException if an I/O error occurs
     */
    @Tag(name = "Generic")
    @GetMapping("/export")
    @Operation(summary = "Export room data to excel")
    public ResponseEntity<byte[]> generateCsv() throws IOException {
        return roomService.exportData();
    }

    /**
     * Returns a list of room names that have a temperature above 70.
     *
     * @return a result containing a list of room names
     */
    @Tag(name = "Generic")
    @GetMapping("/alarm")
    @Operation(summary = "Return a list of room name"
            + "that has temperature above 70")
    public Result<List<String>> alarm() {
        return Result.success(roomService.alarm());
    }

    /**
     * Retrieves door open information by door ID.
     *
     * @param id the door ID
     * @return a result containing a list of door open information
     */
    @GetMapping(path = "door/{id}/openInfo/")
    @Tag(name = "Room Components", description = "Room component APIs")
    @Operation(summary = "Get door open info by door id")
    public Result<List<DoorOpen>> getDoorOpenInfoByDoorId(
            @PathVariable("id") final Integer id) {
        return Result.success(doorService.getOpenInfoByDoorId(id));
    }

    /**
     * Retrieves fan open information by fan ID.
     *
     * @param id the fan ID
     * @return a result containing a list of fan open information
     */
    @GetMapping(path = "fan/{id}/openInfo/")
    @Tag(name = "Room Components")
    @Operation(summary = "Get fan open info by door id")
    public Result<List<FanOpen>> getFanOpenInfoByDoorId(
            @PathVariable("id") final Integer id) {
        return Result.success(fanService.getOpenInfoByFanId(id));
    }

    /**
     * Retrieves light open information by light ID.
     *
     * @param id the light ID
     * @return a result containing a list of light open information
     */
    @GetMapping(path = "light/{id}/openInfo/")
    @Tag(name = "Room Components")
    @Operation(summary = "Get light open info by door id")
    public Result<List<LightOpen>> getLightOpenInfoByDoorId(
            @PathVariable("id") final Integer id) {
        return Result.success(lightService.getOpenInfoByLightId(id));
    }

    /**
     * Retrieves window open information by window ID.
     *
     * @param id the window ID
     * @return a result containing a list of window open information
     */
    @GetMapping(path = "window/{id}/openInfo/")
    @Tag(name = "Room Components")
    @Operation(summary = "Get window open info by door id")
    public Result<List<WindowOpen>> getWindowOpenInfoByDoorId(
            @PathVariable("id") final Integer id) {
        return Result.success(windowService.getOpenInfoByWindowId(id));
    }

    /**
     * Retrieves people information in a room by room ID.
     *
     * @param id the room ID
     * @return a result containing a list of people in the room
     */
    @GetMapping(path = "/{id}/people/")
    @Tag(name = "Room Details", description = "Room details APIs")
    @Operation(summary = "Get people in room info by room id")
    public Result<List<RoomPeople>> getRoomPeopleInfoByDoorId(
            @PathVariable("id") final Integer id) {
        Room room = roomService.findOne(id);
        if (room == null) {
            throw new RoomException();
        }
        return Result.success(room.getRoomPeoples().stream().toList());
    }

    /**
     * Retrieves CO2 information in a room by room ID.
     *
     * @param id the room ID
     * @return a result containing a list of CO2 information in the room
     */
    @GetMapping(path = "/{id}/co2/")
    @Tag(name = "Room Details")
    @Operation(summary = "Get co2 in room info by room id")
    public Result<List<RoomCo2>> getRoomCo2InfoByDoorId(
            @PathVariable("id") final Integer id) {
        Room room = roomService.findOne(id);
        if (room == null) {
            throw new RoomException();
        }
        return Result.success(room.getCo2s().stream().toList());
    }

    /**
     * Retrieves temperature information in a room by room ID.
     *
     * @param id the room ID
     * @return a result containing a list of temperature information in the room
     */
    @GetMapping(path = "/{id}/temperature/")
    @Tag(name = "Room Details")
    @Operation(summary = "Get temperature in room info by room id")
    public Result<List<RoomTemperature>> getRoomTemperatureInfoByDoorId(
            @PathVariable("id") final Integer id) {
        Room room = roomService.findOne(id);
        if (room == null) {
            throw new RoomException();
        }
        return Result.success(room.getTemperatures().stream().toList());
    }

    /**
     * Generates random room values for a room by room ID.
     *
     * @param id the room ID
     * @return a result containing the room data transfer object
     */
    @GetMapping(path = "{id}/generateRandomRoomValues")
    @Tag(name = "Room Details")
    @Operation(summary = "Generate random room values")
    public Result<RoomDTO> generateRandomRoomValues(
            @PathVariable("id") final Integer id) {
        roomService.generateRandomRoomValues(id);
        return Result.success();
    }

    /**
     * Updates a door open status.
     *
     * @param id      the door ID
     * @param openDTO the open data transfer object
     * @return a result indicating success
     */
    @PutMapping("door/{id}/status")
    @Operation(summary = "Get door status by ID")
    public final Result<String> setDoorStatus(
            @PathVariable("id") final Integer id,
            @RequestBody final OpenDTO openDTO) {
        openDTO.setId(id);
        doorService.setStatus(openDTO);
        return Result.success();
    }

    /**
     * Updates a window open status.
     *
     * @param id      the window ID
     * @param openDTO the open data transfer object
     * @return a result indicating success
     */
    @PutMapping("window/{id}/status")
    @Operation(summary = "Get window status by ID")
    public final Result<String> setWindowStatus(
            @PathVariable("id") final Integer id,
            @RequestBody final OpenDTO openDTO) {
        openDTO.setId(id);
        windowService.setStatus(openDTO);
        return Result.success();
    }

    /**
     * Updates a light open status.
     *
     * @param id      the light ID
     * @param openDTO the open data transfer object
     * @return a result indicating success
     */
    @PutMapping("light/{id}/status")
    @Operation(summary = "Get light status by ID")
    public final Result<String> setLightStatus(
            @PathVariable("id") final Integer id,
            @RequestBody final OpenDTO openDTO) {
        openDTO.setId(id);
        lightService.setStatus(openDTO);
        return Result.success();
    }

    /**
     * Updates the status of a fan.
     *
     * @param id      the fan ID
     * @param openDTO the data transfer object containing the status of the fan
     * @return a result indicating success
     */
    @PutMapping("fan/{id}/status")
    @Operation(summary = "Update fan status by ID")
    public Result<String> updateFanStatus(
            @PathVariable("id") final Integer id,
            @RequestBody final OpenDTO openDTO) {
        openDTO.setId(id);
        fanService.setStatus(openDTO);
        return Result.success();
    }
}
