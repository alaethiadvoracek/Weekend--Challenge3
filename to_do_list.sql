CREATE TABLE task (
	id SERIAL PRIMARY KEY, 
	importance INT, 
	task VARCHAR (100), 
	day_of_the_week VARCHAR(20),
	complete_task VARCHAR(3) 
);

