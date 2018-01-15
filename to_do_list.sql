CREATE TABLE task (
	id SERIAL PRIMARY KEY, 
	importance INT, 
	task VARCHAR (100), 
	day_of_the_week VARCHAR(20),
	complete_task VARCHAR(3) 
);
-- started this part but did not get to it

CREATE TABLE category (
	id SERIAL PRIMARY KEY,
	category_name VARCHAR(30)

);

INSERT INTO "category" ("category_name")
VALUES ('Chores'),('School'),('Business'),('Misc.');

CREATE TABLE task_category (
	id SERIAL PRIMARY KEY, 
	category_id INT REFERENCES "category", 
	task_id INT REFERENCES "task"

);
