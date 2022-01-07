package com.skilldistillery.caprate.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.caprate.entities.Property;
import com.skilldistillery.caprate.repositories.PropertyRepository;

@Service
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	private PropertyRepository propertyRepo;
	
	@Override
	public List<Property> getAllProperties() {
				return propertyRepo.findAll();
	}

	@Override
	public Property getPropertyById(int recipeId) {
		// TODO Auto-generated method stub
		return null;
	}

}
