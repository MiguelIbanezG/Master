package com.team3.project.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.WindowOpen;

/**
 * Repository interface for managing WindowOpen entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface WindowOpenRepository
        extends CrudRepository<WindowOpen, Integer> {

    /**
     * Finds a WindowOpen entity by timestamp and window ID.
     *
     * @param timeStamp the timestamp of the record
     * @param windowId  the ID of the window
     * @return the WindowOpen entity matching the given timestamp and window ID
     */
    WindowOpen findByTimeStampAndWindowId(LocalDateTime timeStamp,
            Integer windowId);

    /**
     * Finds the most recent WindowOpen entity for a given window ID.
     *
     * @param windowId the ID of the window
     * @return the most recent WindowOpen entity for the given window ID
     */
    WindowOpen findFirstByWindowIdOrderByTimeStampDesc(Integer windowId);

    /**
     * Finds all WindowOpen entities by window ID.
     *
     * @param id the ID of the window
     * @return a list of WindowOpen entities matching the given window ID
     */
    List<WindowOpen> findAllByWindowId(Integer id);
}
