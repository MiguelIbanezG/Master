package com.team3.project.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.Fan;

/**
 * Repository interface for managing Fan entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface FanRepository extends CrudRepository<Fan, Integer> {
}
