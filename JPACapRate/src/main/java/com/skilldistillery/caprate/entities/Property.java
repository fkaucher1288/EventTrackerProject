package com.skilldistillery.caprate.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Property {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String address;

	public Property() {
		super();
	}

	public Property(int id, String address) {
		super();
		this.id = id;
		this.address = address;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Property [id=" + id + ", address=" + address + "]";
	}

}
