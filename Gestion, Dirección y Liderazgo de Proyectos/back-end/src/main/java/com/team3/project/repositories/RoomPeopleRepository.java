package com.team3.project.repositories;

import java.time.LocalDateTime;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.RoomPeople;

@Repository
public interface RoomPeopleRepository
        extends CrudRepository<RoomPeople, Integer> {

    /**
     * Finds a RoomPeople entity by timestamp and room ID.
     *
     * @param timeStamp the timestamp of the record
     * @param roomId    the ID of the room
     * @return the RoomPeople entity matching the given timestamp and room ID
     */
    RoomPeople findByTimeStampAndRoomId(LocalDateTime timeStamp,
            Integer roomId);

    /**
     * Finds the most recent RoomPeople entity for a given room ID.
     *
     * @param roomId the ID of the room
     * @return the most recent RoomPeople entity for the given room ID
     */
    RoomPeople findFirstByRoomIdOrderByTimeStampDesc(Integer roomId);
}
