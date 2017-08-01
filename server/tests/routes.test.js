const test = require('tape');
const request = require('supertest');
const app = require('./../server');

test('All routes should return the expected results', t => {
  request(app)
    .get('/v1/api/facsters/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.end();
    });
});
test('First User Should be Abdullah', t => {
  request(app)
    .get('/v1/api/facsters/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.same(res.body[0].firstname, 'Abdullah');
      t.end();
    });
});
test('Should be able to get a facster by their name', t => {
  const names = ['Aseel', 'Bart', 'Amelie', 'Abdullah'];
  names.forEach((name, index) => {
    request(app)
      .get(`/v1/api/facsters/${name}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        t.same(res.statusCode, 200, 'Status code is 200');
        t.error(err, 'No error');
        t.same(res.body[0].firstname, name, `Name is ${name} as expected`);
        if (name.length - 1 === index) {
          t.end();
        }
      });
  });
});
