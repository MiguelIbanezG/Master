package com.team3.project.services.light;

import static org.junit.jupiter.api.Assertions.*;

import com.team3.project.domain.Room;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.LightOpenRepository;
import com.team3.project.repositories.LightRepository;
import com.team3.project.services.room.RoomService;
import jakarta.annotation.Resource;
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
class LightServiceRealTest {

    @Resource
    private LightOpenRepository lightOpenRepository;

    @Resource
    private LightRepository lightRepository;

    @Resource
    private LightServiceImpl lightService;

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

        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        List<OpenDTO> mutableLights = new ArrayList<>(roomDTO.getLights());
        OpenDTO fan = new OpenDTO();
        fan.setId(0);
        fan.setIsOpen(true);
        mutableLights.add(fan);

        OpenDTO fan2 = new OpenDTO();
        fan2.setId(null);
        fan2.setIsOpen(false);
        mutableLights.add(fan2);

        OpenDTO fan3 = new OpenDTO();
        fan3.setId(0);
        fan3.setIsOpen(null);
        mutableLights.add(fan3);

        roomDTO.setLights(mutableLights);
        lightService.save(roomDTO, room);
    }

    @Test
    void exportData_ExportsWindowData() {
        XSSFWorkbook workbook = new XSSFWorkbook();
        
        lightService.exportData(workbook, roomMap2);

        assertNotNull(workbook.getSheet("Light"));
        assertNotNull(workbook.getSheet("LightOpen"));
    }

    @Test
    void testSave() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        List<OpenDTO> mutableLights = new ArrayList<>(roomDTO.getLights());

        OpenDTO fan = new OpenDTO();
        fan.setId(0);
        fan.setIsOpen(true);
        mutableLights.add(fan);
        mutableLights.get(0).setIsOpen(false);
        roomDTO.setLights(mutableLights);
        lightService.save(roomDTO, room);
        // This will remove the fan.id == 0 created previously
        lightService.save(roomDTO, room);
        assertEquals(4, roomDTO.getLights().size());
    }

    @Test
    void testSave2() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        List<OpenDTO> mutableLights = new ArrayList<>(roomDTO.getLights());

        Collections.reverse(mutableLights);
        roomDTO.setLights(mutableLights);
        lightService.save(roomDTO, room);
        assertEquals(3, roomDTO.getLights().size());
    }

    @Test
    void testSaveException() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        List<OpenDTO> mutableLights = new ArrayList<>(roomDTO.getLights());

        OpenDTO fan = new OpenDTO();
        fan.setId(99);
        fan.setIsOpen(true);
        mutableLights.add(fan);
        roomDTO.setLights(mutableLights);

        assertThrows(RuntimeException.class, () -> lightService.save(roomDTO, room));
    }
}
