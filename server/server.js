const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const port = process.env.PORT || 4400;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));


// serve back static files
app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('server running on: ', port);
  }); // end spin up server