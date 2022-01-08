package com.skilldistillery.caprate.services;

import java.util.List;

import com.skilldistillery.caprate.entities.Property;

public interface PropertyService {

	List<Property> getAllProperties();
	
	Property getPropertyById(int id);
	
	Property createProperty(Property property );
	
	boolean deleteProperty(int id);
	
	Property updateProperty(Property property, int id);
	
	
	}
