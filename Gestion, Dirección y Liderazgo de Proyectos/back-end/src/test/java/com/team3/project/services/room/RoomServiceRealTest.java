package com.team3.project.services.room;




import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.team3.project.domain.Door;
import com.team3.project.domain.Light;
import com.team3.project.domain.LightOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.RoomTemperature;
import com.team3.project.domain.dto.DoorDTO;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.DoorRepository;
import com.team3.project.repositories.LightOpenRepository;
import com.team3.project.repositories.LightRepository;
import com.team3.project.repositories.RoomCo2Repository;
import com.team3.project.repositories.RoomPeopleRepository;
import com.team3.project.repositories.RoomRepository;
import com.team3.project.repositories.RoomTemperatureRepository;
import com.team3.project.services.door.DoorService;
import com.team3.project.services.fan.FanService;
import com.team3.project.services.light.LightService;
import com.team3.project.services.window.WindowService;
import jakarta.annotation.Resource;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional
@Sql(scripts = "/import.sql")
class RoomServiceRealTest {

    @Resource
    private RoomRepository roomRepository;
    @Resource
    private RoomCo2Repository roomCo2Repository;
    @Resource
    private RoomTemperatureRepository roomTemperatureRepository;
    @Resource
    private RoomPeopleRepository roomPeopleRepository;
    @Resource
    private DoorService doorService;
    @Resource
    private FanService fanService;
    @Resource
    private WindowService windowService;
    @Resource
    private LightService lightService;
    @Resource
    private RoomService roomService;
    @Resource
    private LightRepository lightRepository;
    @Resource
    private DoorRepository doorRepository;
    @Resource
    private LightOpenRepository lightOpenRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Resource
    private RoomServiceImpl roomServiceImpl;

    private Map<String, Integer> roomMap;
    private Map<Integer, String> roomMap2;
    RoomDTO roomDTO;
    Room roomNull;
    Room roomNull2;
    Room roomFalse;
    Room roomTrue;

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
        roomDTO = roomService.getDTO(1);

        RoomDTO newRoomDTO = new RoomDTO();
        newRoomDTO.setId(0);
        newRoomDTO.setName("Test RoomNull");
        newRoomDTO.setSize(100);
        newRoomDTO.setTemperature(new BigDecimal("10"));
        newRoomDTO.setPeople(10);
        newRoomDTO.setCo2(800);
        roomNull = roomService.save(newRoomDTO);

        newRoomDTO.setName("Test RoomNull2");
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(0);
        openDTO.setIsOpen(null);
        newRoomDTO.setWindows(List.of(openDTO));
        newRoomDTO.setLights(List.of(openDTO));
        newRoomDTO.setFans(List.of(openDTO));

        DoorDTO doorDTO = new DoorDTO();
        doorDTO.setId(0);
        doorDTO.setIsOpen(null);
        newRoomDTO.setDoors(List.of(doorDTO));
        roomNull2 = roomService.save(newRoomDTO);

        newRoomDTO.setName("Test Room6");
        openDTO.setIsOpen(false);
        doorDTO.setIsOpen(false);
        newRoomDTO.setWindows(List.of(openDTO));
        newRoomDTO.setLights(List.of(openDTO));
        newRoomDTO.setFans(List.of(openDTO));
        newRoomDTO.setDoors(List.of(doorDTO));
        roomFalse = roomService.save(newRoomDTO);

        newRoomDTO.setName("Test Room5");
        openDTO.setIsOpen(true);
        doorDTO.setIsOpen(true);
        newRoomDTO.setWindows(List.of(openDTO));
        newRoomDTO.setLights(List.of(openDTO));
        newRoomDTO.setFans(List.of(openDTO));
        newRoomDTO.setDoors(List.of(doorDTO));
        roomTrue = roomService.save(newRoomDTO);
    }

    @Test
    void importDataSuccessfully() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledata.xlsx");
        FileInputStream fis = new FileInputStream(file);
        byte[] content = FileCopyUtils.copyToByteArray(fis);

        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "smartroom_exampledata.xlsx", 
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                content 
        );
        roomService.importData(mockFile);

        Room importedRoom = roomRepository.findById(1).orElse(null);
        assertNotNull(importedRoom);
    }

    @Test
    void importDataSuccessfully2() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledataNewData.xlsx");
        FileInputStream fis = new FileInputStream(file);
        byte[] content = FileCopyUtils.copyToByteArray(fis);

        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "smartroom_exampledataNewData.xlsx",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                content
        );
        roomService.importData(mockFile);

        Room importedRoom = roomRepository.findById(1).orElse(null);
        assertNotNull(importedRoom);
    }

    @Test
    void importDataFail() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledataWithException.xlsx");
        FileInputStream fis = new FileInputStream(file);
        byte[] content = FileCopyUtils.copyToByteArray(fis);

        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "smartroom_exampledataWithException.xlsx",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                content
        );
        assertThrows(RuntimeException.class, () -> roomService.importData(mockFile));
    }



    @Test
    void generateRandomRoomValuesSuccessfully() {
        roomService.generateRandomRoomValues(1);
        RoomDTO roomDTO2 = roomService.getDTO(1);
        assertNotNull(roomDTO2.getTemperature());
    }

    @Test
    void exportData() throws IOException {
        ResponseEntity<byte[]> response = roomService.exportData();
        assertNotNull(response.getBody());
    }

    @Test
    void alarm(){
        Room room = new Room();
        room.setSize(100);
        room.setName("Test Room");
        roomRepository.save(room);
        RoomTemperature roomTemperature = new RoomTemperature();
        roomTemperature.setRoomId(1);
        roomTemperature.setTemperature(new BigDecimal(100));
        roomTemperature.setTimeStamp(LocalDateTime.now());
        roomTemperatureRepository.save(roomTemperature);
        List<String> list = roomService.alarm();
        assertNotNull(list);

        roomTemperature.setTemperature(new BigDecimal(70));
        roomTemperature.setTimeStamp(LocalDateTime.now());
        roomTemperatureRepository.save(roomTemperature);
        List<String> list2 = roomService.alarm();
        assertNotNull(list2);

        roomTemperature.setTemperature(new BigDecimal(69));
        roomTemperature.setTimeStamp(LocalDateTime.now());
        roomTemperatureRepository.save(roomTemperature);
        List<String> list3 = roomService.alarm();
        assertNotNull(list3);
    }

    @Test
    void save(){
        RoomDTO roomDTO2 = new RoomDTO();
        roomDTO2.setName("Test Room2");
        roomDTO2.setSize(100);
        roomDTO2.setTemperature(new BigDecimal("75"));
        roomDTO2.setCo2(800);
        roomDTO2.setPeople(10);
        Room room = roomService.save(roomDTO2);
        assertNotNull(room.getId());
    }

    @Test
    void save2(){
        roomService.generateRandomRoomValues(1);
        roomService.generateRandomRoomValues(1);
        roomService.generateRandomRoomValues(1);
        roomService.generateRandomRoomValues(1);
        roomService.generateRandomRoomValues(1);
        roomService.generateRandomRoomValues(1);
        roomService.generateRandomRoomValues(1);
        roomService.generateRandomRoomValues(1);
        RoomDTO roomDTO2 = roomService.getDTO(1);
        roomService.save(roomDTO2);

        assertThrows(RuntimeException.class, () -> roomService.getDTO(100));
    }

    @Test
    void save3(){
        RoomDTO roomDTO2 = new RoomDTO();
        roomDTO2.setId(null);
        roomDTO2.setName("Test Room2");
        roomDTO2.setSize(100);
        Room room = roomService.save(roomDTO2);
        assertNotNull(room.getId());
    }

    @Test
    void save4(){
        RoomDTO roomDTO2 = new RoomDTO();
        roomDTO2.setId(0);
        roomDTO2.setName("Test Room3");
        roomDTO2.setSize(100);
        Room room = roomService.save(roomDTO2);

        roomDTO = roomService.getDTO(room.getId());
        roomDTO.setTemperature(new BigDecimal("75"));
        roomDTO.setPeople(10);

        assertNotNull(room.getId());
    }

    @Test
    void save5(){
        RoomDTO roomDTO2 = new RoomDTO();
        roomDTO2.setId(0);
        roomDTO2.setName("Test Room9");
        roomDTO2.setSize(100);
        
        Room room = roomService.save(roomDTO2);

        roomDTO2 = roomService.getDTO(room.getId());
        roomDTO2.setTemperature(new BigDecimal("75"));
        roomDTO2.setPeople(10);
        roomDTO2.setCo2(800);
        roomService.save(roomDTO2);

        assertNotNull(room.getId());
    }

    @Test
    void save6(){
        RoomDTO roomDTO2 = new RoomDTO();
        roomDTO2.setId(0);
        roomDTO2.setName("Test Room9");
        roomDTO2.setSize(100);

        Room room = roomService.save(roomDTO2);

        roomDTO2 = roomService.getDTO(room.getId());
        roomDTO2.setTemperature(new BigDecimal("75"));
        roomDTO2.setPeople(10);
        roomDTO2.setCo2(800);
        roomService.save(roomDTO2);

        roomDTO2.setTemperature(new BigDecimal("80"));
        roomDTO2.setPeople(100);
        roomDTO2.setCo2(700);
        roomService.save(roomDTO2);

        assertNotNull(room.getId());
    }

    @Test
    void getDTO(){
        roomService.getDTO(1);
        roomService.getDTO(2);
        roomService.getDTO(3);
        roomService.getDTO(roomNull.getId());
        roomService.getDTO(roomNull2.getId());
        roomService.getDTO(roomTrue.getId());
        RoomDTO dto = roomService.getDTO(roomFalse.getId());
        assertNotNull(dto.getId());
    }

    @Test
    void delete(){
        Door door = new Door();
        doorRepository.save(door);
        DoorDTO doorDTO = new DoorDTO();
        doorDTO.setId(3);
        doorDTO.setIsOpen(true);
        List<DoorDTO> mutableDoorsList = new ArrayList<>(roomDTO.getDoors());
        mutableDoorsList.add(doorDTO);
        roomDTO.setDoors(mutableDoorsList);

        Light light = new Light();
        light.setRoomId(1);
        lightRepository.save(light);

        LightOpen lightOpen = new LightOpen();
        lightOpen.setLightId(light.getId());
        lightOpen.setOpen(true);
        lightOpen.setTimeStamp(LocalDateTime.now());
        lightOpenRepository.save(lightOpen);
        roomService.save(roomDTO);

        roomService.generateRandomRoomValues(1);
        roomService.delete(1);

        assertFalse(roomRepository.findById(1).isPresent());
    }

    @Test
    void deleteRoomSuccessfully() {
        Room room = new Room();
        room.setId(1);
        roomService.delete(1);
        roomService.delete(2);
        roomService.delete(roomTrue.getId());

        assertFalse(roomRepository.findById(1).isPresent());
    }
}
