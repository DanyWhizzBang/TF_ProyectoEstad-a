CREATE DATABASE  prestamostf;

USE prestamostf;

CREATE TABLE usuarios(
    email VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    passord VARCHAR(50) NOT NULL
)