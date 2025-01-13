package com.team3.project.services.fan;

import static org.junit.jupiter.api.Assertions.*;

import com.team3.project.domain.Fan;
import com.team3.project.domain.FanOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.FanOpenRepository;
import com.team3.project.repositories.FanRepository;
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
class FanServiceRealTest {

    @Resource
    private FanOpenRepository fanOpenRepository;

    @Resource
    private FanRepository fanRepository;

    @Resource
    private FanServiceImpl fanService;

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
    void importData_ImportsFanData() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledata.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        fanService.importData(workbook, roomMap);

        workbook.close();
        fis.close();
        Iterable<Fan> fanIterable = fanRepository.findAll();
        List<Fan> fans = new ArrayList<>();
        fanIterable.forEach(fans::add);
        assertFalse(fans.isEmpty());
    }

    @Test
    void importData_ImportsFanData2() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledataNewData.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        fanService.importData(workbook, roomMap);

        workbook.close();
        fis.close();
        Iterable<Fan> fanIterable = fanRepository.findAll();
        List<Fan> fans = new ArrayList<>();
        fanIterable.forEach(fans::add);
        assertFalse(fans.isEmpty());
    }

    @Test
    void importData_ImportsFanDataException() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledataWithException.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        assertThrows(RuntimeException.class,
                () ->  fanService.importData(workbook, roomMap));
        workbook.close();
        fis.close();
    }


    @Test
    void exportData_ExportsWindowData() {
        XSSFWorkbook workbook = new XSSFWorkbook();
        FanOpen fanOpen = new FanOpen();
        fanOpen.setFanId(1);
        fanOpen.setOpen(true);
        fanOpen.setTimeStamp(LocalDateTime.now());
        fanOpenRepository.save(fanOpen);
        fanService.exportData(workbook, roomMap2);

        assertNotNull(workbook.getSheet("Ventilator"));
        assertNotNull(workbook.getSheet("VentilaTorOn"));
    }

    @Test
    void testSave() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        List<OpenDTO> toRemove = new ArrayList<>();
        List<OpenDTO> mutableFans = new ArrayList<>(roomDTO.getFans());

        for (OpenDTO fan : mutableFans) {
            if (fan.getId() == 1) {
                toRemove.add(fan);
            }
        }
        mutableFans.removeAll(toRemove);

        OpenDTO fan = new OpenDTO();
        fan.setId(0);
        fan.setIsOpen(true);
        OpenDTO fan2 = new OpenDTO();
        fan2.setId(null);
        fan2.setIsOpen(true);
        mutableFans.add(fan);
        mutableFans.add(fan2);
        roomDTO.setFans(mutableFans);

        fanService.save(roomDTO, room);
        assertEquals(2, roomDTO.getFans().size());
    }

    @Test
    void testSave2() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);

        for (OpenDTO fan : roomDTO.getFans()) {
            if (fan.getId() == 1) {
                fan.setIsOpen(true);
            }
        }

        fanService.save(roomDTO, room);
        assertEquals(1, roomDTO.getFans().size());
    }

    @Test
    void testSave3() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);

        for (OpenDTO fan : roomDTO.getFans()) {
            if (fan.getId() == 1) {
                fan.setId(null);
                fan.setIsOpen(null);
            }
        }

        fanService.save(roomDTO, room);
        assertEquals(1, roomDTO.getFans().size());
    }

    @Test
    void testSave4() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        fanService.save(roomDTO, room);
        assertEquals(1, roomDTO.getFans().size());
    }

    @Test
    void testSaveException() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);

        for (OpenDTO fan : roomDTO.getFans()) {
            if (fan.getId() == 1) {
                fan.setId(100);
            }
        }

        assertThrows(RuntimeException.class, () -> fanService.save(roomDTO, room));
    }
}
