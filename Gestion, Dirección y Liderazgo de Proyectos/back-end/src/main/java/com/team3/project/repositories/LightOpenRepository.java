package com.team3.project.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.LightOpen;

/**
 * Repository interface for managing LightOpen entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface LightOpenRepository
        extends CrudRepository<LightOpen, Integer> {

    /**
     * Finds the most recent LightOpen entity for a given light ID.
     *
     * @param lightId the ID of the light
     * @return the most recent LightOpen entity for the given light ID
     */
    LightOpen findFirstByLightIdOrderByTimeStampDesc(Integer lightId);

    /**
     * Finds all LightOpen entities for a given light ID.
     *
     * @param id the ID of the light
     * @return a list of LightOpen entities for the given light ID
     */
    List<LightOpen> findAllByLightId(Integer id);
}
