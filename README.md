##Set Up 
- [x] Create github repository and link to assignment
- [x] Commit #1 
# Server
- [] set up server 
    - [] install packages and create needed files
    - [] Commit #2
#Database
- [] create initial database 
    - [] create tables with sample data for now.. 
        - [] marked complete should be able to be stored in the database 
    - [] Add tables to .sql file 
    - [] Save sql file to assignment 
    - [] Commit #3
##Getting the App Running 
- [] Set up initial data for the DOM 
    - [] inputs for values to create a new task (store this in the database)
    - [] Append new task to the DOM 
    - [] create buttons to complete or delete task ( mark complete, DELETE task )
        - should have a visual change when marked complete 
        - explore CSS options for a check box in each row of the table that changes when marked complete
        - [] Deleting should delete from DOM and database 
        - [] Commit #4
#Logic
- [] GET, POST, UPDATE, DELETE with connections to database 
    - [] GET for data to the database 
    - [] POST to get data from the database and store on the DOM 
    - [] UPDATE to change DOM when a task is marked complete
        - [] append it to the bottom of the list and tasks to be complete brought to the top of the page (pro mode)
    - [] DELETE linked to button to delete from database and DOM 
    - [] Commit #5 
##Hard Mode 
- [] Create table of categories and assign one category to each task 
- [] Create inputs that let you select category 
    - [] append to DOM 
- [] Commit #6
- [] Create are you sure? option when deleting a task 
    - alert when button clicked 
- [] Commit #7
##Pro Mode
- [] Add due date to tasks 
    - row should change for due dates past due 
- [] Publish to Heroku 
- [] Explore More CSS and implement into app 



