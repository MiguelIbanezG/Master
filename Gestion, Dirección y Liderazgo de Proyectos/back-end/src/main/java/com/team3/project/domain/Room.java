package com.team3.project.domain;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Entity representing a Room.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@DynamicUpdate
@Builder
@Entity
@Table(name = "room")
public class Room {
    /**
     * The unique identifier of the room.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
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
     * The set of RoomDoor entities associated with this room.
     */
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<RoomDoor> roomDoors = new HashSet<>();

    /**
     * The set of Fan entities associated with this room.
     */
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<Fan> fans = new HashSet<>();

    /**
     * The set of Light entities associated with this room.
     */
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<Light> lights = new HashSet<>();

    /**
     * The set of RoomPeople entities associated with this room.
     */
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<RoomPeople> roomPeoples = new HashSet<>();

    /**
     * The set of Window entities associated with this room.
     */
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<Window> windows = new HashSet<>();

    /**
     * The set of RoomCo2 entities associated with this room.
     */
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<RoomCo2> co2s = new HashSet<>();

    /**
     * The set of RoomTemperature entities associated with this room.
     */
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<RoomTemperature> temperatures = new HashSet<>();

    /**
     * Indicates whether all doors in the room should be open.
     */
    @Transient
    @Builder.Default
    private boolean openAllDoor = false;
}
