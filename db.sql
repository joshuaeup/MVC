CREATE DATABASE MVC;

USE MVC;

CREATE TABLE menu (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT,
    dots INT
);

INSERT INTO menu(name, price, dots)
VALUES 
("MilkShake", 8, 20),
("Burger", 20, 26),
("Pasta", 10, 28),
("Fish", 40, 30);

SELECT * FROM menu;

