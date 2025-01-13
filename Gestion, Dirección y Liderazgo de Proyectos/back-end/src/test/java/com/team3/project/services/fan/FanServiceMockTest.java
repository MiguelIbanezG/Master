package com.team3.project.services.fan;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.team3.project.domain.Fan;
import com.team3.project.domain.FanOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.FanOpenRepository;
import com.team3.project.repositories.FanRepository;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
class FanServiceMockTest {

    @Mock
    private FanOpenRepository fanOpenRepository;

    @Mock
    private FanRepository fanRepository;

    @InjectMocks
    private FanServiceImpl fanService;

    private Map<String, Integer> roomMap;
    private Map<Integer, String> roomMap2;

    @Test
    void getOpenInfoByFanId_ReturnsEmptyListWhenNoFanOpen() {
        Integer fanId = 2;
        when(fanOpenRepository.findAllByFanId(fanId)).thenReturn(Collections.emptyList());

        List<FanOpen> result = fanService.getOpenInfoByFanId(fanId);

        assertTrue(result.isEmpty());
        verify(fanOpenRepository).findAllByFanId(fanId);
    }

    @Test
    void importData_ThrowsExceptionWhenRoomNotFound() throws IOException {
        File file = new File("src/test/resources/smartroom_exampledata.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);

        assertThrows(RuntimeException.class, () -> fanService.importData(workbook, roomMap));

        workbook.close();
        fis.close();
    }

    @Test
    void exportData_ThrowsExceptionWhenWorkbookIsNull() {
        assertThrows(NullPointerException.class, () -> fanService.exportData(null, roomMap2));
    }

    @Test
    void save_ThrowsExceptionWhenFanDoesNotExist() {
        RoomDTO roomDTO = new RoomDTO();
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        roomDTO.setFans(Collections.singletonList(openDTO));
        Room room = new Room();
        room.setFans(new HashSet<>());

        assertThrows(RuntimeException.class, () -> fanService.save(roomDTO, room));
    }

    @Test
    void save_SavesNewFanWhenIdIsNull() {
        RoomDTO roomDTO = new RoomDTO();
        OpenDTO openDTO = new OpenDTO();
        roomDTO.setFans(Collections.singletonList(openDTO));
        Room room = new Room();
        room.setId(1);
        room.setFans(new HashSet<>());

        fanService.save(roomDTO, room);

        verify(fanRepository, atLeastOnce()).save(any(Fan.class));
    }

    @Test
    void save_DoesNotSaveFanOpenWhenIsOpenIsNull() {
        RoomDTO roomDTO = new RoomDTO();
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        roomDTO.setFans(Collections.singletonList(openDTO));
        Room room = new Room();
        room.setId(1);
        room.setFans(new HashSet<>());

        Fan existingFan = new Fan();
        existingFan.setId(1);
        existingFan.setRoomId(1);
        when(fanRepository.findById(1)).thenReturn(Optional.of(existingFan));

        assertThrows(RuntimeException.class, () ->  fanService.save(roomDTO, room));
    }

    @Test
    void setStatus_ThrowsExceptionWhenFanIdIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setIsOpen(true);

        assertThrows(RuntimeException.class, () -> fanService.setStatus(openDTO));
    }

    @Test
    void setStatus_ThrowsExceptionWhenFanStatusIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(null);

        assertThrows(RuntimeException.class, () -> fanService.setStatus(openDTO));
    }

    @Test
    void setStatus_CreatesNewRecordWhenNoPreviousRecordExists() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        when(fanOpenRepository.findFirstByFanIdOrderByTimeStampDesc(1)).thenReturn(null);

        fanService.setStatus(openDTO);

        verify(fanOpenRepository).save(any(FanOpen.class));
    }

    @Test
    void setStatus_CreatesNewRecordWhenStatusChanges() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        FanOpen latestRecord = new FanOpen();
        latestRecord.setOpen(false);
        when(fanOpenRepository.findFirstByFanIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        fanService.setStatus(openDTO);

        verify(fanOpenRepository).save(any(FanOpen.class));
    }

    @Test
    void setStatus_DoesNotCreateNewRecordWhenStatusRemainsSame() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        FanOpen latestRecord = new FanOpen();
        latestRecord.setOpen(true);
        when(fanOpenRepository.findFirstByFanIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        fanService.setStatus(openDTO);

        verify(fanOpenRepository, never()).save(any(FanOpen.class));
    }
}
