package com.team3.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.Door;

/**
 * Repository interface for managing Door entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface DoorRepository extends CrudRepository<Door, Integer> {

    /**
     * Finds a list of Door entities by the room ID.
     *
     * @param roomId the ID of the room
     * @return a list of Door entities associated with the given room ID
     */
    @Query("select d from RoomDoor rd join Door d on rd.doorId = d.id "
            + "where rd.roomId = ?1")
    List<Door> findByRoomId(Integer roomId);
}
