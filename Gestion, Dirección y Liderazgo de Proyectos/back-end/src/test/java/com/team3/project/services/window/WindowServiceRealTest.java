package com.team3.project.services.window;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.team3.project.domain.Room;
import com.team3.project.domain.Window;
import com.team3.project.domain.WindowOpen;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.WindowOpenRepository;
import com.team3.project.repositories.WindowRepository;
import com.team3.project.services.room.RoomService;
import jakarta.annotation.Resource;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
class WindowServiceRealTest {

    @Resource
    private WindowOpenRepository windowOpenRepository;

    @Resource
    private WindowRepository windowRepository;

    @Resource
    private WindowServiceImpl windowService;

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
    void importData_ImportsWindowData() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledata.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        windowService.importData(workbook, roomMap);

        workbook.close();
        fis.close();

        Iterable<Window> windowsIterable = windowRepository.findAll();
        List<Window> windows = new ArrayList<>();
        windowsIterable.forEach(windows::add);
        assertFalse(windows.isEmpty());
    }

    @Test
    void importData_ImportsWindowData2() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledataNewData.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        windowService.importData(workbook, roomMap);

        workbook.close();
        fis.close();

        Iterable<Window> windowsIterable = windowRepository.findAll();
        List<Window> windows = new ArrayList<>();
        windowsIterable.forEach(windows::add);
        assertFalse(windows.isEmpty());
    }

    @Test
    void importData_ImportsWindowDataWithException() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledataWithException.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        assertThrows(RuntimeException.class, () -> windowService.importData(workbook, roomMap));
        workbook.close();
        fis.close();
    }

    @Test
    void exportData_ExportsWindowData() {
        XSSFWorkbook workbook = new XSSFWorkbook();
        WindowOpen windowOpen = new WindowOpen();
        windowOpen.setWindowId(5);
        windowOpen.setOpen(true);
        windowOpen.setTimeStamp(LocalDateTime.now());
        windowOpenRepository.save(windowOpen);

        windowService.exportData(workbook, roomMap2);

        assertNotNull(workbook.getSheet("Window"));
        assertNotNull(workbook.getSheet("WindowOpen"));
    }

    @Test
    void save_SavesRoomAndWindows() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        for(OpenDTO window : roomDTO.getWindows()){
            if (window.getId() == 1) {
                window.setId(0);
                window.setIsOpen(true);
            }
        }
        windowService.save(roomDTO, room);
        assertEquals(2, roomDTO.getWindows().size());
    }

    @Test
    void save_SavesRoomAndWindows2() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        OpenDTO openInfo = new OpenDTO();
        openInfo.setId(3);
        openInfo.setIsOpen(true);

        for(OpenDTO window : roomDTO.getWindows()){
            if(window.getId() == 1){
                window.setIsOpen(true);
            }
            if(window.getId() == 2){
                window.setId(null);
            }
        }
        
        roomDTO.getWindows().add(openInfo);
        assertThrows(RuntimeException.class, () -> windowService.save(roomDTO, room));

        Room room2 = roomService.findOne(2);
        RoomDTO roomDTO2 = roomService.getDTO(2);
        for(OpenDTO window : roomDTO2.getWindows()){
            if(window.getId() == 3){
                window.setIsOpen(null);
            }
            if(window.getId() == 4){
                window.setIsOpen(false);
            }
        }

        windowService.save(roomDTO2, room2);
        assertEquals(3, roomDTO.getWindows().size());
    }

    @Test
    void save_SavesRoomAndWindowsRemoveWindow() {
        Room room = roomService.findOne(1);
        RoomDTO roomDTO = roomService.getDTO(1);
        roomDTO.getWindows().clear();
        windowService.save(roomDTO, room);
        assertEquals(0, roomDTO.getWindows().size());
    }
}
