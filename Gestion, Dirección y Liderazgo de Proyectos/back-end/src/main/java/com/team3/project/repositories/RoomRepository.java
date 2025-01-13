package com.team3.project.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.Room;

/**
 * Repository interface for managing Room entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface RoomRepository extends CrudRepository<Room, Integer> {

    /**
     * Finds a Room entity by its name.
     *
     * @param name the name of the room
     * @return the Room entity matching the given name
     */
    Room findByName(String name);
}
