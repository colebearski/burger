-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;

USE burgers_db;

-- table
CREATE TABLE burgers (

	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(250),
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);