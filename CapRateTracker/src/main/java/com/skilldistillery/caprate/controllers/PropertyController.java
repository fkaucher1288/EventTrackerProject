package com.skilldistillery.caprate.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.caprate.entities.Property;
import com.skilldistillery.caprate.services.PropertyService;

@RestController
@RequestMapping("api")
public class PropertyController {
	
	@Autowired
	private PropertyService propertySvc;
	
	@GetMapping("properties")
	public List<Property> index() {
		return propertySvc.getAllProperties();
	}

}
