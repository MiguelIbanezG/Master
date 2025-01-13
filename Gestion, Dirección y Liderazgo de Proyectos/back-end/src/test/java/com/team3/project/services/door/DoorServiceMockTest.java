package com.team3.project.services.door;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.team3.project.domain.Door;
import com.team3.project.domain.DoorOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.RoomDoor;
import com.team3.project.domain.RoomTemperature;
import com.team3.project.domain.dto.DoorDTO;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.DoorOpenRepository;
import com.team3.project.repositories.DoorRepository;
import com.team3.project.repositories.RoomDoorRepository;
import com.team3.project.repositories.RoomTemperatureRepository;
import com.team3.project.utils.Utils;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
class DoorServiceMockTest {

    @Mock
    private DoorOpenRepository doorOpenRepository;

    @Mock
    private RoomDoorRepository roomDoorRepository;

    @Mock
    private DoorRepository doorRepository;

    @Mock
    private RoomTemperatureRepository roomTemperatureRepository;

    @InjectMocks
    private DoorServiceImpl doorService;

    private Map<String, Integer> roomMap;
    private Map<Integer, String> roomMap2;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        roomMap = new HashMap<>();
        roomMap.put("room101", 1);
        roomMap.put("room102", 2);
        roomMap.put("lobby1", 3);
    }

    @Test
    void getOpenInfoByDoorId_ReturnsEmptyListWhenNoDoorOpen() {
        Integer doorId = 2;
        when(doorOpenRepository.findAllByDoorId(doorId)).thenReturn(Collections.emptyList());

        List<DoorOpen> result = doorService.getOpenInfoByDoorId(doorId);

        assertTrue(result.isEmpty());
        verify(doorOpenRepository).findAllByDoorId(doorId);
    }
    

    @Test
    void exportData_ThrowsExceptionWhenWorkbookIsNull() {
        assertThrows(NullPointerException.class, () -> doorService.exportData(null, roomMap2));
    }

    @Test
    void save_SavesNewDoorWhenIdIsNull() {
        RoomDTO roomDTO = new RoomDTO();
        DoorDTO doorDTO = new DoorDTO();
        roomDTO.setDoors(Collections.singletonList(doorDTO));
        Room room = new Room();
        room.setId(1);
        room.setRoomDoors(new HashSet<>());

        doorService.save(roomDTO, room);

        verify(doorRepository, atLeastOnce()).save(any(Door.class));
    }

    @Test
    void setStatus_ThrowsExceptionWhenDoorIdIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setIsOpen(true);

        assertThrows(RuntimeException.class, () -> doorService.setStatus(openDTO));
    }

    @Test
    void setStatus_ThrowsExceptionWhenDoorStatusIsNull() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(null);

        assertThrows(RuntimeException.class, () -> doorService.setStatus(openDTO));
    }

    @Test
    void setStatus_CreatesNewRecordWhenNoPreviousRecordExists() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        when(doorOpenRepository.findFirstByDoorIdOrderByTimeStampDesc(1)).thenReturn(null);

        doorService.setStatus(openDTO);

        verify(doorOpenRepository).save(any(DoorOpen.class));
    }

    @Test
    void setStatus_CreatesNewRecordWhenStatusChanges() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        DoorOpen latestRecord = new DoorOpen();
        latestRecord.setOpen(false);
        when(doorOpenRepository.findFirstByDoorIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        doorService.setStatus(openDTO);

        verify(doorOpenRepository).save(any(DoorOpen.class));
    }

    @Test
    void setStatus_DoesNotCreateNewRecordWhenStatusRemainsSame() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(true);
        DoorOpen latestRecord = new DoorOpen();
        latestRecord.setOpen(true);
        when(doorOpenRepository.findFirstByDoorIdOrderByTimeStampDesc(1)).thenReturn(latestRecord);

        doorService.setStatus(openDTO);

        verify(doorOpenRepository, never()).save(any(DoorOpen.class));
    }

    @Test
    void setStatus_ThrowsExceptionWhenDoorNotFound() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(false);
        when(doorRepository.findById(1)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> doorService.setStatus(openDTO));
    }

    @Test
    void setStatus_ThrowsExceptionWhenRoomTemperatureIsTooHigh() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(false);
        Door door = new Door();
        RoomDoor roomDoor = new RoomDoor();
        Room room = new Room();
        room.setId(1);
        room.setName("Room1");
        roomDoor.setRoom(room);
        door.setRoomDoors(Collections.singleton(roomDoor));
        RoomTemperature roomTemperature = new RoomTemperature();
        roomTemperature.setTemperature(new BigDecimal("80"));
        when(doorRepository.findById(1)).thenReturn(Optional.of(door));
        when(roomTemperatureRepository.findFirstByRoomIdOrderByTimeStampDesc(1)).thenReturn(roomTemperature);

        try (MockedStatic<Utils> utilities = mockStatic(Utils.class)) {
            utilities.when(() -> Utils.isTemperatureSafe(roomTemperature.getTemperature())).thenReturn(false);

            assertThrows(RuntimeException.class, () -> doorService.setStatus(openDTO));
        }
    }

    @Test
    void setStatus_DoesNotThrowExceptionWhenRoomTemperatureIsSafe() {
        OpenDTO openDTO = new OpenDTO();
        openDTO.setId(1);
        openDTO.setIsOpen(false);
        Door door = new Door();
        RoomDoor roomDoor = new RoomDoor();
        Room room = new Room();
        room.setId(1);
        room.setName("Room1");
        roomDoor.setRoom(room);
        door.setRoomDoors(Collections.singleton(roomDoor));
        RoomTemperature roomTemperature = new RoomTemperature();
        roomTemperature.setTemperature(new BigDecimal("60"));
        when(doorRepository.findById(1)).thenReturn(Optional.of(door));
        when(roomTemperatureRepository.findFirstByRoomIdOrderByTimeStampDesc(1)).thenReturn(roomTemperature);

        try (MockedStatic<Utils> utilities = mockStatic(Utils.class)) {
            utilities.when(() -> Utils.isTemperatureSafe(roomTemperature.getTemperature())).thenReturn(true);

            assertDoesNotThrow(() -> doorService.setStatus(openDTO));
        }
    }
}
