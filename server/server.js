//This is all hopefully familiar by now
const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use('/v1/api/', routes);
//TODO We need middleware to convert request and response payloads to an from JSON

//TODO We need to setup a route/collection of routes

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`The things, the things are happening on ${port}!!`);
});
