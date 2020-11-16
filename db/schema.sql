-- DROP DATABASE IF EXISTS;

CREATE DATABASE  nationalparks_db;

USE nationalparks_db;

CREATE TABLE parks (
	id int NOT NULL AUTO_INCREMENT,
	park_name varchar(255) NOT NULL,
	park_code varchar(4) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE activities (
	activity_name text,
	activity_code text,
);

CREATE TABLE topics (
	topic_name text,
	topic_code text,
);

CREATE TABLE trips (
	id int NOT NULL AUTO_INCREMENT,
	park_name varchar(255) NOT NULL,
	park_code varchar(4) NOT NULL,
	selectedActivity varchar(255),
	selectedTopic varchar(255),
	to_dos varchar(255),
	notes varchar(255),
	PRIMARY KEY (id)
)