//This is all hopefully familiar by now
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//TODO We need middleware to convert request and response payloads to an from JSON
app.use('/v1/api/', routes);

//TODO We need to setup a route/collection of routes

module.exports = app;
