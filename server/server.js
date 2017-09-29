//STEP 1 JARED 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

//revise below for database connection

//Controllers

const users_controller = require('./controllers/users_controller');
// const listings_controller = require('./controllers/listings_controller');
// const auth_controller = requre('./controllers/auth_controller');

const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then( db => app.set('db', db) ).catch( err => console.log(err)) ;



//**Endpoints**

//Get

//Create
app.post( '/api/register', users_controller.register);

//Update

//Delete

const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listening on port ${port}.`)
}); 