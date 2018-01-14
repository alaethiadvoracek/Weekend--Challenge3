//Dependencies
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const taskRouter = require('./routes/task.router');


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));


// Routes
app.use('/task', taskRouter);

const port = process.env.PORT || 4400;
//Server Listener
app.listen(port, function(){
    console.log('server running on: ', port);
  }); // end spin up server