package com.skilldistillery.caprate.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@GetMapping("properties/{id}")
	public Property getPropertyById(HttpServletResponse response, @PathVariable int id) {
		Property property = propertySvc.getPropertyById(id);
		if(property == null) {
			response.setStatus(404);
		} return property;
	}
	
	@PutMapping("properties/{id}")
	public Property updateProperty(@RequestBody Property property, @PathVariable int id) {
		return propertySvc.updateProperty(property, id);
	}
	@DeleteMapping("properties/{id}")
	public void deleteProperty(@PathVariable int id, HttpServletResponse res) {
		try {
			if(propertySvc.deleteProperty(id)) {
				res.setStatus(204);
			}
			else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
	
	@PostMapping("properties")
	public Property createProperty(@RequestBody Property property) {
		return propertySvc.createProperty(property);
	}
}
	

