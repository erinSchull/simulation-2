//STEP 1 JARED 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const users_controller = require('../server/controllers/users_controller');
require('dotenv').config()

//revise below for database connection




//**Endpoints**

//Get

//Create

//Update

//Delete

const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listening on port ${port}.`)
});