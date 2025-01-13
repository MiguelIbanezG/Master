package com.team3.project.domain.dto;

import lombok.Data;

/**
 * Data Transfer Object (DTO) for representing the open state of an entity.
 */
@Data
public class OpenDTO {
    /**
     * The unique identifier of the entity.
     */
    private Integer id;

    /**
     * The open state of the entity. Defaults to false.
     */
    private Boolean isOpen = false;
}
