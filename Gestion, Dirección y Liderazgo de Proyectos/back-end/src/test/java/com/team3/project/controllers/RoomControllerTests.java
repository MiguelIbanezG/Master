package com.team3.project.controllers;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.team3.project.domain.DoorOpen;
import com.team3.project.domain.FanOpen;
import com.team3.project.domain.LightOpen;
import com.team3.project.domain.Room;
import com.team3.project.domain.RoomCo2;
import com.team3.project.domain.RoomPeople;
import com.team3.project.domain.RoomTemperature;
import com.team3.project.domain.WindowOpen;
import com.team3.project.domain.dto.OpenDTO;
import com.team3.project.domain.dto.RoomDTO;
import com.team3.project.enumeration.Code;
import com.team3.project.services.door.DoorService;
import com.team3.project.services.fan.FanService;
import com.team3.project.services.light.LightService;
import com.team3.project.services.room.RoomService;
import com.team3.project.services.window.WindowService;
import com.team3.project.utils.Result;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.multipart.MultipartFile;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest
@Sql(scripts = "/import.sql")
class RoomControllerTests {

    @Mock
    private RoomService roomService;

    @Mock
    private DoorService doorService;

    @Mock
    private FanService fanService;

    @Mock
    private LightService lightService;

    @Mock
    private WindowService windowService;

    @InjectMocks
    private RoomController roomController;

    @Test
    void mapReapExcelDataToDB_ReturnsSuccessWhenFileIsValid() throws IOException {
        MultipartFile file = mock(MultipartFile.class);
        when(file.getInputStream()).thenReturn(new ByteArrayInputStream(new byte[0]));

        Result<String> result = roomController.mapReapExcelDataToDB(file);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(roomService).importData(file);
    }

    @Test
    void listRoom_ReturnsListOfRooms() {
        List<Room> rooms = List.of(new Room());
        when(roomService.findAll()).thenReturn(rooms);

        Result<List<Room>> result = roomController.listRoom();

        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(rooms, result.getData());
    }

    @Test
    void createRoom_ReturnsSuccessWhenRoomIsCreated() {
        RoomDTO roomDTO = new RoomDTO();

        Result<String> result = roomController.createRoom(roomDTO);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(roomService).save(roomDTO);
    }

    @Test
    void fullUpdateRoom_ReturnsSuccessWhenRoomIsUpdated() {
        RoomDTO roomDTO = new RoomDTO();
        Integer id = 1;

        Result<String> result = roomController.fullUpdateRoom(id, roomDTO);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(roomService).save(roomDTO);
    }

    @Test
    void getRoom_ReturnsRoomDTOWhenRoomExists() {
        Integer id = 1;
        RoomDTO roomDTO = new RoomDTO();
        when(roomService.getDTO(id)).thenReturn(roomDTO);

        Result<RoomDTO> result = roomController.getRoom(id);

        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(roomDTO, result.getData());
    }

    @Test
    void deleteRoom_ReturnsSuccessWhenRoomIsDeleted() {
        Integer id = 1;

        Result<String> result = roomController.deleteRoom(id);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(roomService).delete(id);
    }

    @Test
    void generateCsv_ReturnsExcelFile() throws IOException {
        byte[] data = new byte[0];
        when(roomService.exportData()).thenReturn(ResponseEntity.ok(data));

        ResponseEntity<byte[]> response = roomController.generateCsv();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertArrayEquals(data, response.getBody());
    }

    @Test
    void alarm_ReturnsListOfRoomNamesWithHighTemperature() {
        List<String> roomNames = List.of("Room1");
        when(roomService.alarm()).thenReturn(roomNames);

        Result<List<String>> result = roomController.alarm();

        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(roomNames, result.getData());
    }

    @Test
    void getDoorOpenInfoByDoorId_ReturnsDoorOpenInfo() {
        Integer id = 1;
        List<DoorOpen> doorOpenList = List.of(new DoorOpen());
        when(doorService.getOpenInfoByDoorId(id)).thenReturn(doorOpenList);

        Result<List<DoorOpen>> result = roomController.getDoorOpenInfoByDoorId(id);

        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(doorOpenList, result.getData());
    }

    @Test
    void getFanOpenInfoByDoorId_ReturnsFanOpenInfo() {
        Integer id = 1;
        List<FanOpen> fanOpenList = List.of(new FanOpen());
        when(fanService.getOpenInfoByFanId(id)).thenReturn(fanOpenList);

        Result<List<FanOpen>> result = roomController.getFanOpenInfoByDoorId(id);

        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(fanOpenList, result.getData());
    }

    @Test
    void getLightOpenInfoByDoorId_ReturnsLightOpenInfo() {
        Integer id = 1;
        List<LightOpen> lightOpenList = List.of(new LightOpen());
        when(lightService.getOpenInfoByLightId(id)).thenReturn(lightOpenList);

        Result<List<LightOpen>> result = roomController.getLightOpenInfoByDoorId(id);

        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(lightOpenList, result.getData());
    }

    @Test
    void getWindowOpenInfoByDoorId_ReturnsWindowOpenInfo() {
        Integer id = 1;
        List<WindowOpen> windowOpenList = List.of(new WindowOpen());
        when(windowService.getOpenInfoByWindowId(id)).thenReturn(windowOpenList);

        Result<List<WindowOpen>> result = roomController.getWindowOpenInfoByDoorId(id);

        assertEquals(Code.SUCCESS, result.getCode());
        assertEquals(windowOpenList, result.getData());
    }

    @Test
    void getRoomPeopleInfoByDoorId_ReturnsRoomPeopleInfo() {
        Integer id = 1;
        Room room = new Room();
        room.setRoomPeoples(Set.of(new RoomPeople()));
        when(roomService.findOne(id)).thenReturn(room);

        Result<List<RoomPeople>> result = roomController.getRoomPeopleInfoByDoorId(id);

        assertEquals(Code.SUCCESS, result.getCode());
    }

    @Test
    void getRoomCo2InfoByDoorId_ReturnsRoomCo2Info() {
        Integer id = 1;
        Room room = new Room();
        room.setCo2s(Set.of(new RoomCo2()));
        when(roomService.findOne(id)).thenReturn(room);

        Result<List<RoomCo2>> result = roomController.getRoomCo2InfoByDoorId(id);

        assertEquals(Code.SUCCESS, result.getCode());
    }

    @Test
    void getRoomTemperatureInfoByDoorId_ReturnsRoomTemperatureInfo() {
        Integer id = 1;
        Room room = new Room();
        room.setTemperatures(Set.of(new RoomTemperature()));
        when(roomService.findOne(id)).thenReturn(room);

        Result<List<RoomTemperature>> result = roomController.getRoomTemperatureInfoByDoorId(id);

        assertEquals(Code.SUCCESS, result.getCode());
    }

    @Test
    void generateRandomRoomValues_ReturnsSuccess() {
        Integer id = 1;

        Result<RoomDTO> result = roomController.generateRandomRoomValues(id);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(roomService).generateRandomRoomValues(id);
    }

    @Test
    void getRoomPeopleInfoByDoorId_ThrowsExceptionWhenRoomNotFound() {
        Integer id = 1;
        when(roomService.findOne(id)).thenReturn(null);

        assertThrows(RuntimeException.class, () -> roomController.getRoomPeopleInfoByDoorId(id));
    }

    @Test
    void getRoomCo2InfoByDoorId_ThrowsExceptionWhenRoomNotFound() {
        Integer id = 1;
        when(roomService.findOne(id)).thenReturn(null);

        assertThrows(RuntimeException.class, () -> roomController.getRoomCo2InfoByDoorId(id));
    }

    @Test
    void getRoomTemperatureInfoByDoorId_ThrowsExceptionWhenRoomNotFound() {
        Integer id = 1;
        when(roomService.findOne(id)).thenReturn(null);

        assertThrows(RuntimeException.class, () -> roomController.getRoomTemperatureInfoByDoorId(id));
    }

    @Test
    void setDoorStatus_ReturnsSuccessWhenStatusIsUpdated() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();

        Result<String> result = roomController.setDoorStatus(id, openDTO);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(doorService).setStatus(openDTO);
    }

    @Test
    void setDoorStatus_ThrowsExceptionWhenDoorNotFound() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();
        doThrow(new RuntimeException("Door not found")).when(doorService).setStatus(openDTO);

        assertThrows(RuntimeException.class, () -> roomController.setDoorStatus(id, openDTO));
    }

    @Test
    void setWindowStatus_ReturnsSuccessWhenStatusIsUpdated() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();

        Result<String> result = roomController.setWindowStatus(id, openDTO);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(windowService).setStatus(openDTO);
    }

    @Test
    void setWindowStatus_ThrowsExceptionWhenWindowNotFound() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();
        doThrow(new RuntimeException("Window not found")).when(windowService).setStatus(openDTO);

        assertThrows(RuntimeException.class, () -> roomController.setWindowStatus(id, openDTO));
    }

    @Test
    void setLightStatus_ReturnsSuccessWhenStatusIsUpdated() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();

        Result<String> result = roomController.setLightStatus(id, openDTO);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(lightService).setStatus(openDTO);
    }

    @Test
    void setLightStatus_ThrowsExceptionWhenLightNotFound() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();
        doThrow(new RuntimeException("Light not found")).when(lightService).setStatus(openDTO);

        assertThrows(RuntimeException.class, () -> roomController.setLightStatus(id, openDTO));
    }

    @Test
    void updateFanStatus_ReturnsSuccessWhenStatusIsUpdated() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();

        Result<String> result = roomController.updateFanStatus(id, openDTO);

        assertEquals(Code.SUCCESS, result.getCode());
        verify(fanService).setStatus(openDTO);
    }

    @Test
    void updateFanStatus_ThrowsExceptionWhenFanNotFound() {
        Integer id = 1;
        OpenDTO openDTO = new OpenDTO();
        doThrow(new RuntimeException("Fan not found")).when(fanService).setStatus(openDTO);

        assertThrows(RuntimeException.class, () -> roomController.updateFanStatus(id, openDTO));
    }
}
