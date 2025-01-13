package com.team3.project.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.RoomTemperature;

@Repository
public interface RoomTemperatureRepository
        extends CrudRepository<RoomTemperature, Integer> {

    /**
     * Finds the most recent RoomTemperature entity for a given room ID.
     *
     * @param roomId the ID of the room
     * @return the most recent RoomTemperature entity for the given room ID
     */
    RoomTemperature findFirstByRoomIdOrderByTimeStampDesc(Integer roomId);
}
