package com.team3.project.services.door;

import static org.junit.jupiter.api.Assertions.*;

import com.team3.project.domain.Door;
import com.team3.project.domain.DoorOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.DoorDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.DoorOpenRepository;
import com.team3.project.repositories.DoorRepository;
import com.team3.project.repositories.RoomDoorRepository;
import com.team3.project.services.room.RoomService;
import jakarta.annotation.Resource;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional
@Sql(scripts = "/import.sql")
class DoorServiceRealTest {

    @Resource
    private DoorOpenRepository doorOpenRepository;

    @Resource
    private RoomDoorRepository roomDoorRepository;

    @Resource
    private DoorRepository doorRepository;

    @Resource
    private DoorServiceImpl doorService;

    @Resource
    private RoomService roomService;

    private Map<String, Integer> roomMap;
    private Map<Integer, String> roomMap2;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        roomMap = new HashMap<>();
        roomMap.put("room101", 1);
        roomMap.put("room102", 2);
        roomMap.put("lobby1", 3);

        roomMap2 = new HashMap<>();
        roomMap2.put(1, "room101");
        roomMap2.put(2, "room101");
        roomMap2.put(3, "room101");
    }

    @Test
    void importData_ImportsDoorData() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledata.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        doorService.importData(workbook, roomMap);

        workbook.close();
        fis.close();

        Iterable<Door> doorIterable = doorRepository.findAll();
        List<Door> doors = new ArrayList<>();
        doorIterable.forEach(doors::add);
        assertFalse(doors.isEmpty());
    }

    @Test
    void importData_ImportsDoorData2() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledataNewData.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        doorService.importData(workbook, roomMap);

        workbook.close();
        fis.close();

        Iterable<Door> doorIterable = doorRepository.findAll();
        List<Door> doors = new ArrayList<>();
        doorIterable.forEach(doors::add);
        assertFalse(doors.isEmpty());
    }


    @Test
    void exportData_ExportsWindowData() {
        XSSFWorkbook workbook = new XSSFWorkbook();
        DoorOpen doorOpen = new DoorOpen();
        doorOpen.setDoorId(1);
        doorOpen.setTimeStamp(LocalDateTime.now());
        doorOpen.setOpen(true);
        doorOpenRepository.save(doorOpen);

        Door door = new Door();
        doorRepository.save(door);
        doorService.exportData(workbook, roomMap2);
        doorService.openAllDoor();

        assertNotNull(workbook.getSheet("Door"));
        assertNotNull(workbook.getSheet("DoorOpen"));
    }

    @Test
    void testOpenAllDoor(){
        doorService.openAllDoor();
        for (Door door : doorRepository.findAll()) {
            DoorOpen doorOpen = doorOpenRepository.findFirstByDoorIdOrderByTimeStampDesc(door.getId());
            assertTrue(doorOpen.isOpen());
        }
    }

    @Test
    void testSave() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        List<DoorDTO> toRemove = new ArrayList<>();
        List<DoorDTO> mutableDoors = new ArrayList<>(roomDTO.getDoors());

        for (DoorDTO doors : mutableDoors) {
            if (doors.getId() == 1) {
                doors.setId(0);
                doors.setIsOpen(true);
            } else if (doors.getId() == 2) {
                toRemove.add(doors);
            }
        }
        mutableDoors.removeAll(toRemove);
        roomDTO.setDoors(mutableDoors);

        doorService.save(roomDTO, room);

        assertEquals(1, roomDTO.getDoors().size());
    }

    @Test
    void testSave2() {
        Room room = roomService.findOne(3);
        room.setOpenAllDoor(false);
        RoomDTO roomDTO = roomService.getDTO(3);
        for(DoorDTO doors : roomDTO.getDoors()){
            if (doors.getId() == 1) {
                doors.setIsOpen(true);
                doors.setAnotherRoomId(2);
            }
        }

        doorService.save(roomDTO, room);
        assertEquals(1, roomDTO.getDoors().size());
    }

    @Test
    void testSave3() {
        Room room = roomService.findOne(3);
        room.setOpenAllDoor(true);
        RoomDTO roomDTO = roomService.getDTO(3);
        for(DoorDTO doors : roomDTO.getDoors()){
            if (doors.getId() == 1) {
                doors.setIsOpen(null);
            }
        }

        doorService.save(roomDTO, room);
        assertEquals(1, roomDTO.getDoors().size());
    }

    @Test
    void testSave4() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        List<DoorDTO> mutableDoors = new ArrayList<>(roomDTO.getDoors());
        room.setOpenAllDoor(true);
        for (DoorDTO doors : mutableDoors) {
            if (doors.getId() == 1) {
                doors.setId(0);
                doors.setIsOpen(true);
                doors.setAnotherRoomId(0);
            } else if (doors.getId() == 2) {
                doors.setIsOpen(true);
            }
        }
        roomDTO.setDoors(mutableDoors);

        doorService.save(roomDTO, room);
        assertEquals(2, roomDTO.getDoors().size());
    }

    @Test
    void testSave5() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        for (DoorDTO doors : roomDTO.getDoors()) {
            if (doors.getId() == 1) {
                doors.setIsOpen(false);
            }
        }

        doorService.save(roomDTO, room);
        assertEquals(2, roomDTO.getDoors().size());
    }

    @Test
    void testSaveException() {
        Room room = roomService.findOne(3);
        RoomDTO roomDTO = roomService.getDTO(3);
        DoorDTO doorDTO = new DoorDTO();
        doorDTO.setId(2);
        doorDTO.setIsOpen(true);
        doorDTO.setAnotherRoomId(1);
        roomDTO.setDoors(Collections.singletonList(doorDTO));

        assertThrows(RuntimeException.class, () -> doorService.save(roomDTO, room));
    }
}
