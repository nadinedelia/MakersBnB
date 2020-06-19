CREATE TABLE users (id SERIAL PRIMARY KEY, first_name VARCHAR(30), last_name VARCHAR(30), email VARCHAR(200), username VARCHAR(30), password VARCHAR(60));
CREATE TABLE spaces (id SERIAL PRIMARY KEY, name VARCHAR(30), description TEXT, price NUMERIC(6,2), owner_id INTEGER, date NUMERIC(6));
CREATE TABLE bookings (id SERIAL PRIMARY KEY, space_id VARCHAR(30), date NUMERIC, requester_id VARCHAR(30));
