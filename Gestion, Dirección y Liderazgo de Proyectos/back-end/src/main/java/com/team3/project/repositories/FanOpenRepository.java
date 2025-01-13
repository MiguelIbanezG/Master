package com.team3.project.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.FanOpen;

/**
 * Repository interface for managing FanOpen entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface FanOpenRepository extends CrudRepository<FanOpen, Integer> {

    /**
     * Finds a FanOpen entity by its timestamp and fan ID.
     *
     * @param timeStamp the timestamp of the FanOpen event
     * @param fanId the ID of the fan
     * @return the FanOpen entity matching the timestamp and fan ID
     */
    FanOpen findByTimeStampAndFanId(LocalDateTime timeStamp, Integer fanId);

    /**
     * Finds the most recent FanOpen entity for a given fan ID.
     *
     * @param fanId the ID of the fan
     * @return the most recent FanOpen entity for the given fan ID
     */
    FanOpen findFirstByFanIdOrderByTimeStampDesc(Integer fanId);

    /**
     * Finds all FanOpen entities for a given fan ID.
     *
     * @param id the ID of the fan
     * @return a list of FanOpen entities for the given fan ID
     */
    List<FanOpen> findAllByFanId(Integer id);
}
