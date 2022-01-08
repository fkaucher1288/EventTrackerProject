package com.skilldistillery.caprate.entities;

import javax.persistence.Column;
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
	
	private String city;
	
	private String state;
	
	@Column(name="market_price")
	private Integer marketPrice;
	
	@Column(name="expected_cashflow")
	private Integer expectedCashflow;
	
	@Column(name="cap_rate")
	private Double capRate;
	
	@Column(name="prop_photo")
	private String propPhoto;

	
	public Property(int id, String address, String city, String state, Integer marketPrice, Integer expectedCashflow,
			Double capRate, String propPhoto) {
		super();
		this.id = id;
		this.address = address;
		this.city = city;
		this.state = state;
		this.marketPrice = marketPrice;
		this.expectedCashflow = expectedCashflow;
		this.capRate = capRate;
		this.propPhoto = propPhoto;
	}

	public Property() {
		super();
		
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Integer getMarketPrice() {
		return marketPrice;
	}

	public void setMarketPrice(Integer marketPrice) {
		this.marketPrice = marketPrice;
	}

	public Integer getExpectedCashflow() {
		return expectedCashflow;
	}

	public void setExpectedCashflow(Integer expectedCashflow) {
		this.expectedCashflow = expectedCashflow;
	}

	public Double getCapRate() {
		return capRate;
	}

	public void setCapRate(Double capRate) {
		this.capRate = capRate;
	}

	public String getPropPhoto() {
		return propPhoto;
	}

	public void setPropPhoto(String propPhoto) {
		this.propPhoto = propPhoto;
	}

	@Override
	public String toString() {
		return "Property [id=" + id + ", address=" + address + ", city=" + city + ", state=" + state + ", marketPrice="
				+ marketPrice + ", expectedCashflow=" + expectedCashflow + ", capRate=" + capRate + ", propPhoto="
				+ propPhoto + "]";
	}

	

}
