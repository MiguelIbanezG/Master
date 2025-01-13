package com.team3.project.services.window;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.team3.project.domain.Room;
import com.team3.project.domain.Window;
import com.team3.project.domain.WindowOpen;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.WindowOpenRepository;
import com.team3.project.repositories.WindowRepository;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
class WindowServiceMockTest {

    @Mock
    private WindowOpenRepository windowOpenRepository;

    @Mock
    private WindowRepository windowRepository;

    @InjectMocks
    private WindowServiceImpl windowService;

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
    }

    @Test
    void getOpenInfoByWindowId_ReturnsWindowOpenList() {
        Integer windowId = 1;
        List<WindowOpen> expectedList = new ArrayList<>();
        when(windowOpenRepository.findAllByWindowId(windowId)).thenReturn(expectedList);

        List<WindowOpen> result = windowService.getOpenInfoByWindowId(windowId);

        assertEquals(expectedList, result);
        verify(windowOpenRepository).findAllByWindowId(windowId);
    }

    @Test
    void importData_ImportsWindowData() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledata.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        windowService.importData(workbook, roomMap);

        verify(windowRepository, atLeastOnce()).save(any(Window.class));
        verify(windowOpenRepository, atLeastOnce()).save(any(WindowOpen.class));
        workbook.close();
        fis.close();
    }

    @Test
    void exportData_ExportsWindowData() {
        XSSFWorkbook workbook = new XSSFWorkbook();

        windowService.exportData(workbook, roomMap2);

        assertNotNull(workbook.getSheet("Window"));
        assertNotNull(workbook.getSheet("WindowOpen"));
    }

    @Test
    void save_SavesRoomAndWindows() {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setWindows(Collections.singletonList(new OpenDTO()));
        Room room = new Room();
        room.setWindows(new HashSet<>());

        windowService.save(roomDTO, room);

        verify(windowRepository, atLeastOnce()).save(any(Window.class));
        verify(windowOpenRepository, atLeastOnce()).save(any(WindowOpen.class));
    }

    @Test
    void save_ThrowsExceptionWhenWindowDoesNotExist() {
        RoomDTO roomDTO = new RoomDTO();
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        roomDTO.setWindows(Collections.singletonList(openDTO));
        Room room = new Room();
        room.setWindows(new HashSet<>());

        assertThrows(RuntimeException.class, () -> windowService.save(roomDTO, room));
    }

    @Test
    void setStatus_ThrowsExceptionWhenWindowIdIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setIsOpen(true);

        assertThrows(RuntimeException.class, () -> windowService.setStatus(openDTO));
    }

    @Test
    void setStatus_ThrowsExceptionWhenWindowStatusIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(null);

        assertThrows(RuntimeException.class, () -> windowService.setStatus(openDTO));
    }

    @Test
    void setStatus_CreatesNewRecordWhenNoPreviousRecordExists() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        when(windowOpenRepository.findFirstByWindowIdOrderByTimeStampDesc(1)).thenReturn(null);

        windowService.setStatus(openDTO);

        verify(windowOpenRepository).save(any(WindowOpen.class));
    }

    @Test
    void setStatus_CreatesNewRecordWhenStatusChanges() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        WindowOpen latestRecord = new WindowOpen();
        latestRecord.setOpen(false);
        when(windowOpenRepository.findFirstByWindowIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        windowService.setStatus(openDTO);

        verify(windowOpenRepository).save(any(WindowOpen.class));
    }

    @Test
    void setStatus_DoesNotCreateNewRecordWhenStatusRemainsSame() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        WindowOpen latestRecord = new WindowOpen();
        latestRecord.setOpen(true);
        when(windowOpenRepository.findFirstByWindowIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        windowService.setStatus(openDTO);

        verify(windowOpenRepository, never()).save(any(WindowOpen.class));
    }
}
