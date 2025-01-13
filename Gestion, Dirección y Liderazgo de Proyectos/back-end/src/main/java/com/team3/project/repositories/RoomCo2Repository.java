package com.team3.project.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.RoomCo2;

/**
 * Repository interface for managing RoomCo2 entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface RoomCo2Repository extends CrudRepository<RoomCo2, Integer> {

    /**
     * Finds the most recent RoomCo2 entity for a given room ID.
     *
     * @param roomId the ID of the room
     * @return the most recent RoomCo2 entity for the given room ID
     */
    RoomCo2 findFirstByRoomIdOrderByTimeStampDesc(Integer roomId);
}
