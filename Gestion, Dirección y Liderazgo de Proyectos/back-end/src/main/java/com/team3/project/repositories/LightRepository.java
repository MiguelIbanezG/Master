package com.team3.project.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.Light;

/**
 * Repository interface for managing Light entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface LightRepository extends CrudRepository<Light, Integer> {
}
