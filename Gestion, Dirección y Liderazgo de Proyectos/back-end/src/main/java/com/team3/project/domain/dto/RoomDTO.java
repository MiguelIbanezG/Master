package com.team3.project.domain.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Data Transfer Object (DTO) for representing a room.
 */
@Data
public class RoomDTO {
    /**
     * The unique identifier of the room.
     */
    private Integer id;

    /**
     * The name of the room.
     */
    private String name;

    /**
     * The size of the room.
     */
    private Integer size;

    /**
     * The CO2 level in the room.
     */
    private Integer co2;

    /**
     * The number of people in the room.
     */
    private Integer people;

    /**
     * The temperature of the room.
     */
    private BigDecimal temperature;

    /**
     * The list of doors in the room.
     */
    private List<DoorDTO> doors = new ArrayList<>();

    /**
     * The list of fans in the room.
     */
    private List<OpenDTO> fans = new ArrayList<>();

    /**
     * The list of windows in the room.
     */
    private List<OpenDTO> windows = new ArrayList<>();

    /**
     * The list of lights in the room.
     */
    private List<OpenDTO> lights = new ArrayList<>();
}
