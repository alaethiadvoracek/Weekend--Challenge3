const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//Routes 

router.get('/', (req, res) =>{
    const queryText = 'SELECT * FROM task ORDER BY "day_of_the_week"';
    pool.query(queryText)
        .then((result) => {
            // console.log('query results: ', result);            
            res.send(result.rows);
        })//end then result
        .catch((err) => {
            // console.log('error making select query:', err);
            res.sendStatus(500);
        });//end catch error
});//end router get for information from task table 

router.post('/', (req, res) => {
    console.log('req.body: ', req.body);
    const queryText = 'INSERT INTO task("task", "day_of_the_week") VALUES($1, $2)';
    pool.query(queryText, [req.body.task, req.body.day_of_the_week])
        .then((result) => {
            console.log('query results: ', result);
            res.sendStatus(201);
        }) 
        .catch((err) => {
            // console.log('error making insert query:', err);
            res.sendStatus(500);
        });//end catch error
});//end router post information from database

router.put('/complete/:id', (req, res) => {
    const queryText = 'UPDATE task SET "complete_task" = "TRUE" WHERE "id" = $1';
    pool.query(queryText, [req.body.complete_task, req.params.id])
        .then((result) => {
        console.log('query results: ', result);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error making insert query:', err);
        res.sendStatus(500);
    });
})//end update to database completed tasks 

router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM task WHERE "id"= $1'
    pool.query(queryText, [req.params.id])
        .then((result) => {
         console.log('query results: ', result);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('error making insert query:', err);
        res.sendStatus(500);
    });
})//end delete task in database 

module.exports = router;