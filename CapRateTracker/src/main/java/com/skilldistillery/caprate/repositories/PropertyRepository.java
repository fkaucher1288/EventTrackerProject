package com.skilldistillery.caprate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.caprate.entities.Property;

public interface PropertyRepository extends JpaRepository<Property, Integer> {

}
