-- database
CREATE DATABASE crudnodejsmysql;

-- using db
use crudnodejsmysql;

-- tables
CREATE TABLE customer (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
address VARCHAR(100) NOT NULL,
phone VARCHAR(15)
);

-- show table
SHOW TABLES; 

-- describe tables

describe customer;