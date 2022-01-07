package com.skilldistillery.caprate.services;

import java.util.List;

import com.skilldistillery.caprate.entities.Property;

public interface PropertyService {

	List<Property> getAllProperties();
	Property getPropertyById(int recipeId);
	}
