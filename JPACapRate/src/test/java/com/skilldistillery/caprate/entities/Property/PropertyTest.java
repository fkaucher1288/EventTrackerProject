package com.skilldistillery.caprate.entities.Property;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.caprate.property.entities.Property;

class PropertyTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Property property;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPACapRate");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		property = em.find(Property.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		property = null;
	}

	@Test
	void test() {
		assertNotNull(property);
		assertEquals("1234 Golden Ln", property.getAddress());

	}

}