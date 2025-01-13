package com.team3.project.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.DoorOpen;

/**
 * Repository interface for managing DoorOpen entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface DoorOpenRepository extends CrudRepository<DoorOpen, Integer> {

    /**
     * Finds a DoorOpen entity by its timestamp and door ID.
     *
     * @param timeStamp the timestamp of the DoorOpen event
     * @param doorId the ID of the door
     * @return the DoorOpen entity matching the timestamp and door ID
     */
    DoorOpen findByTimeStampAndDoorId(LocalDateTime timeStamp, Integer doorId);

    /**
     * Finds the most recent DoorOpen entity for a given door ID.
     *
     * @param doorId the ID of the door
     * @return the most recent DoorOpen entity for the given door ID
     */
    DoorOpen findFirstByDoorIdOrderByTimeStampDesc(Integer doorId);

    /**
     * Finds all DoorOpen entities for a given door ID.
     *
     * @param id the ID of the door
     * @return a list of DoorOpen entities for the given door ID
     */
    List<DoorOpen> findAllByDoorId(Integer id);

    /**
     * Deletes all DoorOpen entities for a given door ID.
     *
     * @param id the ID of the door
     */
    void deleteAllByDoorId(Integer id);
}
