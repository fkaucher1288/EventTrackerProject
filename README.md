# EventTrackerProject

## Overview
The purpose of this project is to demonstrate understanding of CRUD operations and mapping of entities using REST APIs. My project is called the cap rate tracker. Potential investment properties are loaded into the database with basic information about their location and a photo of the property. The properties also have numbers associated with them that determine a capitalization rate, or how much money they stand to make on their investment if they were to choose to purchase the investment property. This program allows the user to create new properties and add them to the database, delete properties from the database, and update properties information that is currently in the database.

## REST API
REST API mapping was used on the back end to route the entities and database to the front end.

##HTML/JavaScript Front end

##Angular Front End

## REST API Reference
|Return type     | HTTP Method|      URI            | Request Body | Purpose   |
|----------------|------------|---------------------|--------------|-----------|
| List<Property> |    GET     | api/properties      |              |    List   |
|   Property     |    GET     | api/properties/{id} |              | GetById   |
|   Property     |    PUT     | api/properties/{id} |  Property    | updateProp|
|   Property     |   DELETE   | api/properties/{id} |              | deleteProp|
|   Property     |   UPDATE   | api/properties/{id} |  Property    | createProp|


##Technologies Used
Spring Boot, Eclipse, MySQL, Postman

##Lessons Learned
I have become much more comfortable with REST API mapping. Building out the entities is becoming second nature and very intuitive as is creating the logic for the methods in the service impl. The logic in the methods are still my weak spot, however I felt much more comfortable with them this time around. I had very little experience, previously, with building out a database, so that was were I gained the most from this project.
