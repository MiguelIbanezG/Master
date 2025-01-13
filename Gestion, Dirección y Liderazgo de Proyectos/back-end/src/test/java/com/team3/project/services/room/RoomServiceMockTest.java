package com.team3.project.services.room;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.team3.project.domain.Room;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.repositories.RoomCo2Repository;
import com.team3.project.repositories.RoomPeopleRepository;
import com.team3.project.repositories.RoomRepository;
import com.team3.project.repositories.RoomTemperatureRepository;
import com.team3.project.services.door.DoorService;
import com.team3.project.services.fan.FanService;
import com.team3.project.services.light.LightService;
import com.team3.project.services.window.WindowService;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.multipart.MultipartFile;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
class RoomServiceMockTest {

    @Mock
    private RoomRepository roomRepository;
    @Mock
    private RoomCo2Repository roomCo2Repository;
    @Mock
    private RoomTemperatureRepository roomTemperatureRepository;
    @Mock
    private RoomPeopleRepository roomPeopleRepository;
    @Mock
    private DoorService doorService;
    @Mock
    private FanService fanService;
    @Mock
    private WindowService windowService;
    @Mock
    private LightService lightService;

    @InjectMocks
    private RoomServiceImpl roomService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void saveRoomSuccessfully() {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setName("Test Room");
        roomDTO.setSize(100);
        roomDTO.setTemperature(new BigDecimal("75"));
        roomDTO.setCo2(800);
        roomDTO.setPeople(10);

        Room room = new Room();
        room.setId(1);
        room.setName("Test Room");
        room.setSize(100);

        when(roomRepository.save(any(Room.class))).thenReturn(room);

        Room savedRoom = roomService.save(roomDTO);

        assertNotNull(savedRoom);
        assertEquals("Test Room", savedRoom.getName());
        verify(roomRepository, times(1)).save(any(Room.class));
    }

    @Test
    void saveRoomThrowsExceptionWhenRoomDoesNotExist() {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(1);

        when(roomRepository.findById(1)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> roomService.save(roomDTO));
        assertEquals("Room not found", exception.getMessage());
    }

    @Test
    void deleteRoomThrowsExceptionWhenRoomDoesNotExist() {
        when(roomRepository.findById(1)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> roomService.delete(1));
        assertEquals("Room not found", exception.getMessage());
    }

    

    @Test
    void generateRandomRoomValuesThrowsExceptionWhenRoomDoesNotExist() {
        when(roomRepository.findById(1)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> roomService.generateRandomRoomValues(1));
        assertEquals("Room not found", exception.getMessage());
    }

    @Test
    void findAllReturnsAllRooms() {
        Room room1 = new Room();
        room1.setId(1);
        room1.setName("Room 1");

        Room room2 = new Room();
        room2.setId(2);
        room2.setName("Room 2");

        List<Room> roomList = List.of(room1, room2);
        when(roomRepository.findAll()).thenReturn(roomList);

        List<Room> result = roomService.findAll();

        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Room 1", result.get(0).getName());
        assertEquals("Room 2", result.get(1).getName());
    }

    @Test
    void findAllReturnsEmptyListWhenNoRoomsExist() {
        when(roomRepository.findAll()).thenReturn(new ArrayList<>());

        List<Room> result = roomService.findAll();

        assertNotNull(result);
        assertTrue(result.isEmpty());
    }

    @Test
    void importDataThrowsIOException() throws IOException {
        MultipartFile file = mock(MultipartFile.class);
        when(file.getInputStream()).thenThrow(new IOException("Test IOException"));

        assertThrows(IOException.class, () -> roomService.importData(file));
    }
}
