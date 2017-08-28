//This is all hopefully familiar by now
const express = require('express');
const path = require('path');
const routes = require('./routes');
// require the body parser middleware
const bodyParser = require('body-parser')

const app = express();

//TODO We need middleware to convert request and response payloads to an from JSON
app.use(bodyParser.json())

//TODO We need to setup a route/collection of routes
app.use('/v1/api', routes)
// Adding the first argument here means that all the paths in the routes file will now come after '/v1/api/'

module.exports = app;
