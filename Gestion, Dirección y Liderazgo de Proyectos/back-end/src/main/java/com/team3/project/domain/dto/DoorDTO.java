package com.team3.project.domain.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * Data Transfer Object (DTO) for Door entities.
 * Extends the OpenDTO class to include additional properties specific to doors.
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class DoorDTO extends OpenDTO {
    /**
     * The ID of another room connected by this door.
     */
    private Integer anotherRoomId;
}
