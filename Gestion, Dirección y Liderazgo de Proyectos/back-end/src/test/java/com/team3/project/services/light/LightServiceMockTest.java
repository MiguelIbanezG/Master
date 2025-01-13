package com.team3.project.services.light;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.team3.project.domain.Light;
import com.team3.project.domain.LightOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.LightOpenRepository;
import com.team3.project.repositories.LightRepository;
import java.util.*;
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
class LightServiceMockTest {

    @Mock
    private LightOpenRepository lightOpenRepository;

    @Mock
    private LightRepository lightRepository;

    @InjectMocks
    private LightServiceImpl lightService;

    private Map<Integer, String> roomMap2;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getOpenInfoByLightId_ReturnsEmptyListWhenNoLightOpen() {
        Integer lightId = 2;
        when(lightOpenRepository.findAllByLightId(lightId)).thenReturn(Collections.emptyList());

        List<LightOpen> result = lightService.getOpenInfoByLightId(lightId);

        assertTrue(result.isEmpty());
        verify(lightOpenRepository).findAllByLightId(lightId);
    }

    @Test
    void exportData_ThrowsExceptionWhenWorkbookIsNull() {
        assertThrows(NullPointerException.class, () -> lightService.exportData(null, roomMap2));
    }

    @Test
    void save_ThrowsExceptionWhenLightBelongsToDifferentRoom() {
        RoomDTO roomDTO = new RoomDTO();
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        roomDTO.setLights(Collections.singletonList(openDTO));
        Room room = new Room();
        room.setId(2);
        room.setLights(new HashSet<>());

        Light existingLight = new Light();
        existingLight.setId(1);
        existingLight.setRoomId(3);
        when(lightRepository.findById(1)).thenReturn(Optional.of(existingLight));

        assertThrows(RuntimeException.class, () -> lightService.save(roomDTO, room));
    }

    @Test
    void save_SavesNewLightWhenIdIsNull() {
        RoomDTO roomDTO = new RoomDTO();
        OpenDTO openDTO = new OpenDTO();
        roomDTO.setLights(Collections.singletonList(openDTO));
        Room room = new Room();
        room.setId(1);
        room.setLights(new HashSet<>());

        lightService.save(roomDTO, room);

        verify(lightRepository, atLeastOnce()).save(any(Light.class));
    }

    @Test
    void save_DoesNotSaveLightOpenWhenIsOpenIsNull() {
        RoomDTO roomDTO = new RoomDTO();
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        roomDTO.setLights(Collections.singletonList(openDTO));
        Room room = new Room();
        room.setId(1);
        room.setLights(new HashSet<>());

        Light existingLight = new Light();
        existingLight.setId(1);
        existingLight.setRoomId(1);
        when(lightRepository.findById(1)).thenReturn(Optional.of(existingLight));

        assertThrows(RuntimeException.class, () ->  lightService.save(roomDTO, room));
    }

    @Test
    void setStatus_ThrowsExceptionWhenLightIdIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setIsOpen(true);

        assertThrows(RuntimeException.class, () -> lightService.setStatus(openDTO));
    }

    @Test
    void setStatus_ThrowsExceptionWhenLightStatusIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(null);

        assertThrows(RuntimeException.class, () -> lightService.setStatus(openDTO));
    }

    @Test
    void setStatus_CreatesNewRecordWhenNoPreviousRecordExists() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        when(lightOpenRepository.findFirstByLightIdOrderByTimeStampDesc(1)).thenReturn(null);

        lightService.setStatus(openDTO);

        verify(lightOpenRepository).save(any(LightOpen.class));
    }

    @Test
    void setStatus_CreatesNewRecordWhenStatusChanges() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        LightOpen latestRecord = new LightOpen();
        latestRecord.setOpen(false);
        when(lightOpenRepository.findFirstByLightIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        lightService.setStatus(openDTO);

        verify(lightOpenRepository).save(any(LightOpen.class));
    }

    @Test
    void setStatus_DoesNotCreateNewRecordWhenStatusRemainsSame() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        LightOpen latestRecord = new LightOpen();
        latestRecord.setOpen(true);
        when(lightOpenRepository.findFirstByLightIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        lightService.setStatus(openDTO);

        verify(lightOpenRepository, never()).save(any(LightOpen.class));
    }
}
