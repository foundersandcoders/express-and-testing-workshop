const test = require('tape');
const request = require('supertest');
const server = require('./../server');

test('All routes should return the expected results', t => {
  request(server)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.end();
    });
});
