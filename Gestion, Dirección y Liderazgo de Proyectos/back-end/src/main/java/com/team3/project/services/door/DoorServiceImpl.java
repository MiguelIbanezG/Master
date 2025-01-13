package com.team3.project.services.door;

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

import com.team3.project.domain.Door;
import com.team3.project.domain.DoorOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.RoomDoor;
import com.team3.project.domain.RoomTemperature;
import com.team3.project.domain.dto.DoorDTO;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.exception.DoorException;
import com.team3.project.repositories.DoorOpenRepository;
import com.team3.project.repositories.DoorRepository;
import com.team3.project.repositories.RoomDoorRepository;
import com.team3.project.repositories.RoomTemperatureRepository;
import com.team3.project.utils.Utils;

import jakarta.annotation.Resource;

/**
 * Service implementation for managing door operations.
 */
@Service
public class DoorServiceImpl implements DoorService {
    /**
     * Repository for managing DoorOpen entities.
     */
    @Resource
    private DoorOpenRepository doorOpenRepository;

    /**
     * Repository for managing Door entities.
     */
    @Resource
    private DoorRepository doorRepository;

    /**
     * Repository for managing RoomDoor entities.
     */
    @Resource
    private RoomDoorRepository roomDoorRepository;

    /**
     * Repository for managing RoomTemperatureRepository entities.
     */
    @Resource
    private RoomTemperatureRepository roomTemperatureRepository;

    /**
     * Retrieves the open information for a specific door by its ID.
     *
     * @param id the ID of the door
     * @return a list of DoorOpen objects containing the open information
     */
    @Override
    public List<DoorOpen> getOpenInfoByDoorId(final Integer id) {
        return doorOpenRepository.findAllByDoorId(id);
    }

    /**
     * Opens all doors. If a door is not already open, it will be marked as open
     * with the current timestamp.
     */
    @Override
    public void openAllDoor() {
        for (Door door : doorRepository.findAll()) {
            DoorOpen openInfo = doorOpenRepository
                    .findFirstByDoorIdOrderByTimeStampDesc(door.getId());
            if (openInfo == null || !openInfo.isOpen()) {
                doorOpenRepository.save(DoorOpen.builder().doorId(door.getId())
                        .isOpen(true).timeStamp(LocalDateTime.now()).build());
            }
        }
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
        XSSFSheet worksheet = workbook.getSheet("Door");
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            XSSFRow row = worksheet.getRow(i);
            Integer id = (int) row.getCell(0).getNumericCellValue();
            Door door = doorRepository.findById(id).orElse(null);
            if (door == null) {
                door = new Door();
                door.setId(id);
                doorRepository.save(door);
            }
        }

        worksheet = workbook.getSheet("Door_Connects_Room");
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            XSSFRow row = worksheet.getRow(i);
            Integer id = (int) row.getCell(0).getNumericCellValue();
            Integer roomId = roomMap
                    .get(row.getCell(1).getStringCellValue().toLowerCase());
            RoomDoor roomDoor = roomDoorRepository
                    .findByRoomIdAndDoorId(roomId, id);
            if (roomDoor == null) {
                roomDoor = new RoomDoor();
                roomDoor.setDoorId(id);
                roomDoor.setRoomId(roomId);
                roomDoorRepository.save(roomDoor);
            }
        }

        worksheet = workbook.getSheet("DoorOpen");
        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            XSSFRow row = worksheet.getRow(i);
            LocalDateTime date = Utils.convertToLocalDateTime(
                    row.getCell(0).getStringCellValue());
            Integer doorId = (int) row.getCell(1).getNumericCellValue();
            boolean isOpen = row.getCell(2).getStringCellValue()
                    .equals("true");
            DoorOpen doorOpen = doorOpenRepository
                    .findByTimeStampAndDoorId(date, doorId);
            if (doorOpen == null) {
                doorOpen = DoorOpen.builder().timeStamp(date).doorId(doorId)
                        .isOpen(isOpen).build();
                doorOpenRepository.save(doorOpen);
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
        // Create and populate the "Door" sheet
        Sheet sheet = workbook.createSheet("Door");
        int i = 0;
        Row row = sheet.createRow(i++);
        row.createCell(0).setCellValue("ID");
        for (Door door : doorRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(door.getId());
        }

        // Create and populate the "DoorOpen" sheet
        sheet = workbook.createSheet("DoorOpen");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue("Timestamp");
        row.createCell(1).setCellValue("Door_Id");
        row.createCell(2).setCellValue("isOpen");
        for (DoorOpen doorOpen : doorOpenRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(Utils
                    .convertToLocalDateTimeString(doorOpen.getTimeStamp()));
            row.createCell(1).setCellValue(doorOpen.getDoorId());
            row.createCell(2).setCellValue(
                    doorOpen.isOpen() ? "true" : "false");
        }

        // Create and populate the "Door_Connects_Room" sheet
        sheet = workbook.createSheet("Door_Connects_Room");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue("Door_ID");
        row.createCell(1).setCellValue("Room_ID");
        for (RoomDoor roomDoor : roomDoorRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(roomDoor.getDoorId());
            row.createCell(1)
                    .setCellValue(roomMap.get(roomDoor.getRoomId()));
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
        // List of RoomDoor entities associated with the room
        List<RoomDoor> doorCheck = new ArrayList<>(room.getRoomDoors());

        // Iterate through each DoorDTO in the roomDTO
        for (DoorDTO data : roomDTO.getDoors()) {
            Integer doorId = data.getId();
            Door door = null;
            RoomDoor anotherRoom = null;

            // Check if the door already exists
            if (doorId != null) {
                door = doorRepository.findById(doorId).orElse(null);
            }

            // If the door does not exist, create a new one
            if (door == null) {
                door = new Door();
                doorRepository.save(door);
                doorId = door.getId();
            } else {
                anotherRoom = checkAndGetAnotherRoom(room.getId(), doorId);
            }

            // Check if the door is already associated with the room
            // If the door is not associated with the room, create a new
            // association
            boolean found = checkDoorRoomAssociation(room, doorId, doorCheck);
            if (!found) {
                RoomDoor roomDoor = new RoomDoor();
                roomDoor.setDoorId(doorId);
                roomDoor.setRoomId(room.getId());
                roomDoorRepository.save(roomDoor);
                room.getRoomDoors().add(roomDoor);
            }

            // Check if the door is associated with another room
            checkAndSaveAnotherDoorRoomAssociation(data, doorId, anotherRoom);

            if (data.getIsOpen() == null) {
                continue;
            }

            // Determine if the door should be open
            boolean open = data.getIsOpen();
            open = room.isOpenAllDoor() || open;
            DoorOpen doorOpen = doorOpenRepository
                    .findFirstByDoorIdOrderByTimeStampDesc(doorId);
            if (doorOpen != null && doorOpen.isOpen() == open) {
                continue;
            }

            // Create a new DoorOpen entity and save it
            doorOpen = new DoorOpen();
            doorOpen.setDoorId(doorId);
            doorOpen.setOpen(open);
            doorOpen.setTimeStamp(LocalDateTime.now());
            doorOpenRepository.save(doorOpen);
        }

        // Delete all remaining RoomDoor associations
        roomDoorRepository.deleteAll(doorCheck);

        // If the room is set to open all doors, open all doors
        if (room.isOpenAllDoor()) {
            openAllDoor();
        }
    }

    @Override
    public final void setStatus(final OpenDTO openDTO) {
        if (openDTO.getId() == null) {
            throw new DoorException("Door id is null");
        }

        if (openDTO.getIsOpen() == null) {
            throw new DoorException("Door status is null");
        }

        if (!openDTO.getIsOpen()) {
            Door door = doorRepository.findById(openDTO.getId()).orElse(null);
            if (door == null) {
                throw new DoorException("Door not found");
            }
            for (RoomDoor roomDoor : door.getRoomDoors()) {
                RoomTemperature lastTemperature =
                    roomTemperatureRepository
                        .findFirstByRoomIdOrderByTimeStampDesc(
                            roomDoor.getRoom().getId()
                    );
                if (!Utils.isTemperatureSafe(
                        lastTemperature.getTemperature())
                ) {
                    throw new DoorException(
                            "Room " + roomDoor.getRoom().getName()
                            + " temperature  is too high to close"
                    );
                }
            }
        }

        DoorOpen latestRecord = doorOpenRepository
                .findFirstByDoorIdOrderByTimeStampDesc(openDTO.getId());
        DoorOpen newRecord = null;
        if (latestRecord != null) {
            if (!openDTO.getIsOpen().equals(latestRecord.isOpen())) {
                newRecord = new DoorOpen();
            }
        } else {
            newRecord = new DoorOpen();
        }
        if (newRecord != null) {
            newRecord.setDoorId(openDTO.getId());
            newRecord.setTimeStamp(LocalDateTime.now());
            newRecord.setOpen(openDTO.getIsOpen());
            doorOpenRepository.save(newRecord);
        }
    }

    private boolean checkDoorRoomAssociation(final Room room,
            final Integer doorId,
            final List<RoomDoor> doorCheck) {
        for (RoomDoor roomDoor : room.getRoomDoors()) {
            if (roomDoor.getDoorId().equals(doorId)) {
                doorCheck.remove(roomDoor);
                return true;
            }
        }
        return false;
    }

    private void checkAndSaveAnotherDoorRoomAssociation(final DoorDTO data,
            final Integer doorId,
            final RoomDoor anotherRoom) {
        // If the door is not associated with another room, create a new
        // association
        if (anotherRoom == null && data.getAnotherRoomId() != null
                && data.getAnotherRoomId() != 0) {
            RoomDoor roomDoor = new RoomDoor();
            roomDoor.setDoorId(doorId);
            roomDoor.setRoomId(data.getAnotherRoomId());
            roomDoorRepository.save(roomDoor);
        }
    }

    private RoomDoor checkAndGetAnotherRoom(final int roomId,
            final Integer doorId) {
        List<RoomDoor> connectedRooms = roomDoorRepository
                .findAllByDoorId(doorId);
        RoomDoor anotherRoom = null;
        for (RoomDoor roomDoor : connectedRooms) {
            if (!roomDoor.getRoomId().equals(roomId)) {
                if (anotherRoom != null) {
                    throw new DoorException(
                            "Door has more than 2 connected rooms");
                } else {
                    anotherRoom = roomDoor;
                }
            }
        }
        return anotherRoom;
    }
}
