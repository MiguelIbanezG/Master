package com.team3.project.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.team3.project.domain.Window;

/**
 * Repository interface for managing Window entities.
 * Extends CrudRepository to provide CRUD operations.
 */
@Repository
public interface WindowRepository extends CrudRepository<Window, Integer> {
}
