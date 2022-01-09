package com.skilldistillery.caprate.services;

import java.util.List;
import java.util.Optional;

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
	public Property getPropertyById(int id) {
		Optional<Property> propOpt = propertyRepo.findById(id);
		Property prop = null;
		if(propOpt.isPresent()) {
			prop = propOpt.get();
		}
		return prop;
	}

	@Override
	public Property createProperty(Property property) {
		propertyRepo.saveAndFlush(property);
		
		return property;
	}

	@Override
	public boolean deleteProperty(int id) {
		boolean deleted = false;
		Optional<Property> propOpt = propertyRepo.findById(id);
		if(propOpt.isPresent()) {
			Property p = propOpt.get();
		propertyRepo.delete(p);
		deleted = true;
		}
		
		return deleted;
	}

	@Override
	public Property updateProperty(Property property, int id) {
	
		Optional<Property> propOpt = propertyRepo.findById(id);
		propertyRepo.findAllById(id);
		Property managedProp = null;
		if(propOpt.isPresent()) {
			managedProp = propOpt.get();
		
		if(property.getAddress() != null) {
			managedProp.setAddress(property.getAddress());
		}
		if(property.getCity() != null) {
			managedProp.setCity(property.getCity());
		}
		if(property.getState() != null) {
			managedProp.setState(property.getState());
		}
		if(property.getMarketPrice() != null) {
			managedProp.setMarketPrice(property.getMarketPrice());
		}
		if(property.getExpectedCashflow() != null) {
			managedProp.setExpectedCashflow(property.getExpectedCashflow());
		}
		if(property.getCapRate() != null) {
			managedProp.setCapRate(property.getCapRate());
			
		}
		
		if(property.getPropPhoto() != null) {
			managedProp.setPropPhoto(property.getPropPhoto());
		}
		
	}

		return managedProp;
	
	}

}
