package com.team3.project.services.room;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.team3.project.domain.DoorOpen;
import com.team3.project.domain.Fan;
import com.team3.project.domain.FanOpen;
import com.team3.project.domain.Light;
import com.team3.project.domain.LightOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.RoomCo2;
import com.team3.project.domain.RoomDoor;
import com.team3.project.domain.RoomPeople;
import com.team3.project.domain.RoomTemperature;
import com.team3.project.domain.Window;
import com.team3.project.domain.WindowOpen;
import com.team3.project.domain.dto.DoorDTO;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.exception.RoomException;
import com.team3.project.repositories.DoorOpenRepository;
import com.team3.project.repositories.DoorRepository;
import com.team3.project.repositories.FanOpenRepository;
import com.team3.project.repositories.FanRepository;
import com.team3.project.repositories.LightOpenRepository;
import com.team3.project.repositories.LightRepository;
import com.team3.project.repositories.RoomCo2Repository;
import com.team3.project.repositories.RoomDoorRepository;
import com.team3.project.repositories.RoomPeopleRepository;
import com.team3.project.repositories.RoomRepository;
import com.team3.project.repositories.RoomTemperatureRepository;
import com.team3.project.repositories.WindowOpenRepository;
import com.team3.project.repositories.WindowRepository;
import com.team3.project.services.door.DoorService;
import com.team3.project.services.fan.FanService;
import com.team3.project.services.light.LightService;
import com.team3.project.services.window.WindowService;
import com.team3.project.utils.Utils;

import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;

/**
 * Service implementation for managing rooms.
 */
@Service
@Slf4j
public class RoomServiceImpl implements RoomService {
    /**
     * Repository for managing Room entities.
     */
    @Resource
    private RoomRepository roomRepository;

    /**
     * Repository for managing RoomDoor entities.
     */
    @Resource
    private RoomDoorRepository roomDoorRepository;

    /**
     * Repository for managing Fan entities.
     */
    @Resource
    private FanRepository fanRepository;

    /**
     * Repository for managing Door entities.
     */
    @Resource
    private DoorRepository doorRepository;

    /**
     * Repository for managing Window entities.
     */
    @Resource
    private WindowRepository windowRepository;

    /**
     * Repository for managing Light entities.
     */
    @Resource
    private LightRepository lightRepository;

    /**
     * Repository for managing DoorOpen entities.
     */
    @Resource
    private DoorOpenRepository doorOpenRepository;

    /**
     * Repository for managing FanOpen entities.
     */
    @Resource
    private FanOpenRepository fanOpenRepository;

    /**
     * Repository for managing WindowOpen entities.
     */
    @Resource
    private WindowOpenRepository windowOpenRepository;

    /**
     * Repository for managing LightOpen entities.
     */
    @Resource
    private LightOpenRepository lightOpenRepository;

    /**
     * Repository for managing RoomPeople entities.
     */
    @Resource
    private RoomPeopleRepository roomPeopleRepository;

    /**
     * Repository for managing RoomTemperature entities.
     */
    @Resource
    private RoomTemperatureRepository roomTemperatureRepository;

    /**
     * Repository for managing RoomCo2 entities.
     */
    @Resource
    private RoomCo2Repository roomCo2Repository;

    /**
     * Service for managing Door operations.
     */
    @Resource
    private DoorService doorService;

    /**
     * Service for managing Fan operations.
     */
    @Resource
    private FanService fanService;

    /**
     * Service for managing Window operations.
     */
    @Resource
    private WindowService windowService;

    /**
     * Service for managing Light operations.
     */
    @Resource
    private LightService lightSerice;

    /**
     * Imports data from an Excel file.
     *
     * @param reapExcelDataFile the Excel file to import
     * @throws IOException if an I/O error occurs
     */
    @Transactional
    public void importData(final MultipartFile reapExcelDataFile)
            throws IOException {
        try (XSSFWorkbook workbook = new XSSFWorkbook(
                reapExcelDataFile.getInputStream())) {
            Map<String, Integer> roomMap = new HashMap<>();

            XSSFSheet worksheet = workbook.getSheet("Room");
            for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
                XSSFRow row = worksheet.getRow(i);
                String name = row.getCell(0).getStringCellValue();
                Integer size = (int) row.getCell(1).getNumericCellValue();
                Room room = roomRepository.findByName(name);
                if (room == null) {
                    room = new Room();
                    room.setName(name);
                }

                room.setSize(size);
                roomRepository.save(room);
                if (roomMap.containsKey(name.toLowerCase())) {
                    throw new RoomException("Duplicate room name");
                }
                roomMap.put(name.toLowerCase(), room.getId());
            }

            worksheet = workbook.getSheet("PeopleInRoom");
            for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
                XSSFRow row = worksheet.getRow(i);
                LocalDateTime date = Utils.convertToLocalDateTime(
                        row.getCell(0).getStringCellValue());
                Integer roomId = roomMap
                        .get(row.getCell(1).getStringCellValue().toLowerCase());
                Integer numPeople = (int) row.getCell(2).getNumericCellValue();
                RoomPeople roomPeople = roomPeopleRepository
                        .findByTimeStampAndRoomId(date, roomId);
                if (roomPeople == null) {
                    roomPeople = RoomPeople.builder().timeStamp(date)
                            .roomId(roomId).numPeople(numPeople).build();
                    roomPeopleRepository.save(roomPeople);
                }
            }

            doorService.importData(workbook, roomMap);
            fanService.importData(workbook, roomMap);
            windowService.importData(workbook, roomMap);
        }
    }

    /**
     * Saves a room and its associated entities.
     *
     * @param roomDTO the room data transfer object
     * @return the saved room entity
     */
    @Override
    @Transactional
    public Room save(final RoomDTO roomDTO) {
        Room room = null;
        if (roomDTO.getId() != null && roomDTO.getId() != 0) {
            room = roomRepository.findById(roomDTO.getId()).orElse(null);
            if (room == null) {
                throw new RoomException();
            }
            BeanUtils.copyProperties(roomDTO, room);
        } else {
            room = new Room();
            BeanUtils.copyProperties(roomDTO, room);
            room.setId(null);
        }
        roomRepository.save(room);

        checkAndSaveCo2(roomDTO, room);
        checkAndSaveTemperature(roomDTO, room);
        checkAndSavePeople(roomDTO, room);

        doorService.save(roomDTO, room);
        fanService.save(roomDTO, room);
        windowService.save(roomDTO, room);
        lightSerice.save(roomDTO, room);
        return room;
    }

    /**
     * Retrieves a room by its ID.
     *
     * @param id the room ID
     * @return the room data transfer object
     */
    @Override
    public RoomDTO getDTO(final Integer id) {
        Room room = roomRepository.findById(id).orElse(null);
        if (room == null) {
            throw new RoomException();
        }
        return mapToDTO(room);
    }

    /**
     * Deletes a room by its ID.
     *
     * @param id the room ID
     */
    @Override
    @Transactional
    public void delete(final Integer id) {
        Room room = roomRepository.findById(id).orElse(null);
        if (room == null) {
            throw new RoomException();
        }

        List<Integer> doorIds = new ArrayList<>();
        for (RoomDoor roomDoor : room.getRoomDoors()) {
            List<RoomDoor> roomDoors = roomDoorRepository
                    .findAllByDoorId(roomDoor.getDoorId());
            if (roomDoors.size() == 1) {
                doorIds.add(roomDoor.getDoorId());
                doorOpenRepository.deleteAllByDoorId(roomDoor.getDoorId());
            }
        }
        roomDoorRepository.deleteAll(room.getRoomDoors());
        doorRepository.deleteAllById(doorIds);
        for (Fan fan : room.getFans()) {
            fanOpenRepository.deleteAll(fan.getFanOpens());
        }
        fanRepository.deleteAll(room.getFans());

        for (Window window : room.getWindows()) {
            windowOpenRepository.deleteAll(window.getWindowOpens());
        }
        windowRepository.deleteAll(room.getWindows());

        for (Light light : room.getLights()) {
            lightOpenRepository.deleteAll(light.getLightOpens());
        }
        lightRepository.deleteAll(room.getLights());

        roomCo2Repository.deleteAll(room.getCo2s());
        roomTemperatureRepository.deleteAll(room.getTemperatures());
        roomPeopleRepository.deleteAll(room.getRoomPeoples());

        roomRepository.delete(room);
    }

    /**
     * Retrieves a room by its ID.
     *
     * @param id the room ID
     * @return the room data transfer object
     */
    @Override
    public Room findOne(final Integer id) {
        return roomRepository.findById(id).orElse(null);
    }

    /**
     * Retrieves all rooms.
     *
     * @return a list of room data transfer objects
     */
    @Override
    public List<Room> findAll() {
        List<Room> rooms = new ArrayList<>();
        Iterable<Room> roomIterable = roomRepository.findAll();
        roomIterable.forEach(rooms::add);
        return rooms;
    }

    /**
     * Generates random values for a room's CO2, temperature, and number of
     * people.
     *
     * @param id the ID of the room
     * @throws RuntimeException if the room does not exist
     */
    @Override
    @Transactional
    public void generateRandomRoomValues(final Integer id) {
        Room room = roomRepository.findById(id).orElse(null);
        if (room == null) {
            throw new RoomException();
        }

        RoomCo2 roomCo2 = new RoomCo2();
        roomCo2.setRoomId(room.getId());
        final int minCo2 = 600;
        final int maxCo2 = 1200;
        SecureRandom secureRandom = new SecureRandom();
        int randomCo2 = secureRandom.nextInt(maxCo2 - minCo2) + minCo2;
        roomCo2.setCo2(randomCo2);
        roomCo2.setTimeStamp(LocalDateTime.now());
        roomCo2Repository.save(roomCo2);

        final int minTemperature = 25;
        final int maxTemperature = 100;
        RoomTemperature roomTemperature = new RoomTemperature();
        roomTemperature.setRoomId(room.getId());
        int randomTemp = secureRandom.nextInt(
                maxTemperature - minTemperature) + minTemperature;
        roomTemperature.setTemperature(
                new BigDecimal(randomTemp));
        roomTemperature.setTimeStamp(LocalDateTime.now());
        roomTemperatureRepository.save(roomTemperature);
        if (Utils.isTemperatureSafe(roomTemperature.getTemperature())) {
            doorService.openAllDoor();
        }

        RoomPeople roomPeople = new RoomPeople();
        roomPeople.setRoomId(room.getId());
        final int minPeople = 0;
        final int maxPeople = 10;
        int randomPeople = secureRandom.nextInt(
                maxPeople - minPeople) + minPeople;
        roomPeople.setNumPeople(randomPeople);
        roomPeople.setTimeStamp(LocalDateTime.now());
        roomPeopleRepository.save(roomPeople);

        mapToDTO(room);
    }

    /**
     * Exports data to an Excel file.
     *
     * @return a ResponseEntity containing the Excel file as a byte array
     */
    @Override
    public ResponseEntity<byte[]> exportData() throws IOException {
        final String timestamp = "Timestamp";
        final String roomId = "Room_ID";
        XSSFWorkbook workbook = new XSSFWorkbook();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        Map<Integer, String> roomMap = new HashMap<>();

        // Create and populate the "Room" sheet
        Sheet sheet = workbook.createSheet("Room");
        int i = 0;
        Row row = sheet.createRow(i++);
        row.createCell(0).setCellValue("name");
        row.createCell(1).setCellValue("size (m2)");
        for (Room room : roomRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(room.getName());
            row.createCell(1).setCellValue(room.getSize());
            roomMap.put(room.getId(), room.getName());
        }

        // Create and populate the "PeopleInRoom" sheet
        sheet = workbook.createSheet("PeopleInRoom");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue(timestamp);
        row.createCell(1).setCellValue(roomId);
        row.createCell(2).setCellValue("NOPeopleInRoom");
        for (RoomPeople roomPeople : roomPeopleRepository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0)
                    .setCellValue(Utils.convertToLocalDateTimeString(
                            roomPeople.getTimeStamp()));
            row.createCell(1)
                    .setCellValue(roomMap.get(roomPeople.getRoomId()));
            row.createCell(2).setCellValue(roomPeople.getNumPeople());
        }

        // Create and populate the "Co2InRoom" sheet
        sheet = workbook.createSheet("Co2InRoom");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue(timestamp);
        row.createCell(1).setCellValue(roomId);
        row.createCell(2).setCellValue("Co2InRoom");
        for (RoomCo2 roomCo2 : roomCo2Repository.findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0).setCellValue(Utils
                    .convertToLocalDateTimeString(roomCo2.getTimeStamp()));
            row.createCell(1)
                    .setCellValue(roomMap.get(roomCo2.getRoomId()));
            row.createCell(2).setCellValue(roomCo2.getCo2());
        }

        // Create and populate the "TemperatureInRoom" sheet
        sheet = workbook.createSheet("TemperatureInRoom");
        i = 0;
        row = sheet.createRow(i++);
        row.createCell(0).setCellValue(timestamp);
        row.createCell(1).setCellValue(roomId);
        row.createCell(2).setCellValue("TemperatureInRoom");
        for (RoomTemperature roomTemperature : roomTemperatureRepository
                .findAll()) {
            row = sheet.createRow(i++);
            row.createCell(0)
                    .setCellValue(Utils.convertToLocalDateTimeString(
                            roomTemperature.getTimeStamp()));
            row.createCell(1)
                    .setCellValue(roomMap.get(roomTemperature.getRoomId()));
            row.createCell(2).setCellValue(
                    roomTemperature.getTemperature().doubleValue());
        }

        doorService.exportData(workbook, roomMap);
        fanService.exportData(workbook, roomMap);
        windowService.exportData(workbook, roomMap);
        lightSerice.exportData(workbook, roomMap);

        // Write to ByteArrayOutputStream
        workbook.write(outputStream);

        // Prepare response
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=export.xlsx");
        headers.add(HttpHeaders.CONTENT_TYPE,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        return ResponseEntity.ok().headers(headers)
                .body(outputStream.toByteArray());
    }

    /**
     * Retrieves a list of room names where the temperature is above the
     * threshold.
     *
     * @return a list of room names with temperatures above 70.0
     */
    @Override
    public List<String> alarm() {
        List<String> roomNames = new ArrayList<>();
        final double minTemperature = 70.0;
        for (Room room : roomRepository.findAll()) {
            RoomTemperature roomTemperature = roomTemperatureRepository
                    .findFirstByRoomIdOrderByTimeStampDesc(room.getId());
            if (roomTemperature != null && roomTemperature.getTemperature()
                    .compareTo(BigDecimal.valueOf(minTemperature)) >= 0) {
                roomNames.add(room.getName());
            }
        }

        return roomNames;
    }

    /**
     * Maps a room entity to a room data transfer object.
     *
     * @param room the room entity
     * @return the room data transfer object
     */
    RoomDTO mapToDTO(final Room room) {
        RoomDTO roomDTO = new RoomDTO();
        BeanUtils.copyProperties(room, roomDTO);

        List<DoorDTO> doors = doorRepository.findByRoomId(room.getId()).stream()
                .map(door -> {
                    DoorOpen doorOpen = doorOpenRepository
                            .findFirstByDoorIdOrderByTimeStampDesc(
                                    door.getId());
                    DoorDTO openDTO = new DoorDTO();
                    openDTO.setId(door.getId());
                    openDTO.setIsOpen(
                            doorOpen != null ? doorOpen.isOpen() : null);
                    openDTO.setAnotherRoomId(roomDoorRepository
                            .findConnectedRoomId(room.getId(), door.getId()));
                    return openDTO;
                })
                .toList();
        roomDTO.setDoors(doors);

        for (Fan fan : room.getFans()) {
            FanOpen fanOpen = fanOpenRepository
                    .findFirstByFanIdOrderByTimeStampDesc(fan.getId());
            OpenDTO openDTO = new OpenDTO();
            openDTO.setId(fan.getId());
            openDTO.setIsOpen(
                    fanOpen != null ? fanOpen.isOpen() : null);
            roomDTO.getFans().add(openDTO);
        }

        for (Window window : room.getWindows()) {
            WindowOpen windowOpen = windowOpenRepository
                    .findFirstByWindowIdOrderByTimeStampDesc(window.getId());
            OpenDTO openDTO = new OpenDTO();
            openDTO.setId(window.getId());
            openDTO.setIsOpen(
                    windowOpen != null ? windowOpen.isOpen() : null);
            roomDTO.getWindows().add(openDTO);
        }

        for (Light light : room.getLights()) {
            LightOpen lightOpen = lightOpenRepository
                    .findFirstByLightIdOrderByTimeStampDesc(light.getId());
            OpenDTO openDTO = new OpenDTO();
            openDTO.setId(light.getId());
            openDTO.setIsOpen(lightOpen != null ? lightOpen.isOpen() : null);
            roomDTO.getLights().add(openDTO);
        }

        RoomPeople roomPeople = roomPeopleRepository
                .findFirstByRoomIdOrderByTimeStampDesc(room.getId());
        roomDTO.setPeople(roomPeople != null ? roomPeople.getNumPeople() : 0);

        RoomTemperature roomTemperature = roomTemperatureRepository
                .findFirstByRoomIdOrderByTimeStampDesc(room.getId());
        roomDTO.setTemperature(
                roomTemperature != null ? roomTemperature.getTemperature()
                        : null);

        RoomCo2 roomCo2 = roomCo2Repository
                .findFirstByRoomIdOrderByTimeStampDesc(room.getId());
        roomDTO.setCo2(roomCo2 != null ? roomCo2.getCo2() : null);

        return roomDTO;
    }

    private void checkAndSaveCo2(final RoomDTO roomDTO, final Room room) {
        if (roomDTO.getCo2() != null) {
            RoomCo2 lastCo2 = roomCo2Repository
                    .findFirstByRoomIdOrderByTimeStampDesc(room.getId());
            if (lastCo2 == null || !lastCo2.getCo2().equals(roomDTO.getCo2())) {
                RoomCo2 roomCo2 = new RoomCo2();
                roomCo2.setRoomId(room.getId());
                roomCo2.setCo2(roomDTO.getCo2());
                roomCo2.setTimeStamp(LocalDateTime.now());
                roomCo2Repository.save(roomCo2);
            }
        }
    }

    private void checkAndSaveTemperature(final RoomDTO roomDTO,
            final Room room) {
        if (roomDTO.getTemperature() != null) {
            room.setOpenAllDoor(
                    !Utils.isTemperatureSafe(roomDTO.getTemperature())
            );
            RoomTemperature lastTemperature = roomTemperatureRepository
                    .findFirstByRoomIdOrderByTimeStampDesc(room.getId());
            if (lastTemperature == null || !lastTemperature.getTemperature()
                    .equals(roomDTO.getTemperature())) {
                RoomTemperature roomTemperature = new RoomTemperature();
                roomTemperature.setRoomId(room.getId());
                roomTemperature.setTemperature(roomDTO.getTemperature());
                roomTemperature.setTimeStamp(LocalDateTime.now());
                roomTemperatureRepository.save(roomTemperature);
            }
        }
    }

    private void checkAndSavePeople(final RoomDTO roomDTO, final Room room) {
        if (roomDTO.getPeople() != null) {
            RoomPeople lastPeople = roomPeopleRepository
                    .findFirstByRoomIdOrderByTimeStampDesc(room.getId());
            if (lastPeople == null
                    || !lastPeople.getNumPeople().equals(roomDTO.getPeople())) {
                RoomPeople roomPeople = new RoomPeople();
                roomPeople.setRoomId(room.getId());
                roomPeople.setNumPeople(roomDTO.getPeople());
                roomPeople.setTimeStamp(LocalDateTime.now());
                roomPeopleRepository.save(roomPeople);
            }
        }
    }
}
