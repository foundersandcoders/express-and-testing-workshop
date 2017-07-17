const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`The things, the things are happening on ${port}!!`);
});
