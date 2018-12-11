//This is all hopefully familiar by now
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Parses the request payload (if JSON) before the request goes to the handler
app.use(bodyParser.json());

app.use(routes);

module.exports = app;
