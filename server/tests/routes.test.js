const test = require('tape');
const shot = require('shot');
const server = require('./../server');

tape('All routes should return the expected results', t => {
  const dispatch = (req, res) => {
    res.send();
  };
  shot.inject();
  t.equal(res.status);
});
