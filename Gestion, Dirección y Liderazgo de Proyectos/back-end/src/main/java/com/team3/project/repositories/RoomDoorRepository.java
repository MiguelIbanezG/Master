package com.team3.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.RoomDoor;

@Repository
public interface RoomDoorRepository extends CrudRepository<RoomDoor, Integer> {

    /**
     * Finds a RoomDoor entity by room ID and door ID.
     *
     * @param roomId the ID of the room
     * @param doorId the ID of the door
     * @return the RoomDoor entity matching the given room ID and door ID
     */
    RoomDoor findByRoomIdAndDoorId(Integer roomId, Integer doorId);

    /**
     * Finds all RoomDoor entities by door ID.
     *
     * @param doorId the ID of the door
     * @return a list of RoomDoor entities matching the given door ID
     */
    List<RoomDoor> findAllByDoorId(Integer doorId);

    /**
     * Finds the connected room ID for a given room ID and door ID.
     *
     * @param roomId the ID of the room
     * @param doorId the ID of the door
     * @return the connected room ID for the given room ID and door ID
     */
    @Query("SELECT r.roomId FROM RoomDoor r "
            + "WHERE r.roomId <> ?1 AND r.doorId = ?2")
    Integer findConnectedRoomId(Integer roomId, Integer doorId);
}
