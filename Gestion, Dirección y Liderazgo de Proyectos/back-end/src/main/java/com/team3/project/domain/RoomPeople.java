package com.team3.project.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

/**
 * Entity class representing the RoomPeople table.
 * This class is used to map the room_people table in the database.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@DynamicUpdate
@Builder
@Entity
@Table(name = "room_people")
public class RoomPeople {
    /**
     * Unique identifier for the RoomPeople entity.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Integer id;

    /**
     * Identifier for the associated room.
     */
    private Integer roomId;

    /**
     * Timestamp indicating when the record was created or updated.
     */
    private LocalDateTime timeStamp;

    /**
     * Number of people in the room.
     */
    private Integer numPeople;

    /**
     * The Room entity associated with this RoomPeople entity.
     * This field is ignored during JSON serialization.
     */
    @JsonIgnore
    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roomId", insertable = false, updatable = false)
    private Room room;
}
