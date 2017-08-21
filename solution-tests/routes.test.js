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
        if (names.length - 1 === index) {
          t.end();
        }
      });
  });
});
test('Should add a new facster', t => {
  const facTwelver = { firstname: 'jason', surname: 'bourne', cohort: 12 };
  request(app)
    .post(`/v1/api/facster/new`)
    .send(facTwelver)
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 201, 'Status code is 201');
      t.error(err, 'No error');
      t.same(res.body[0].firstname, 'jason', 'Should add JSON bourne to FAC');
      t.end();
    });
});
test('Should find a facsters\' hobbies', t => {
  request(app)
    .get(`/v1/api/facsters/bart/hobby`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.same(
        res.body[0].hobby,
        'Ninja training',
        'Should return the hobby of a given facster'
      );
      t.end();
    });
});
test('That it returns a given facsters\' superpowers', t => {
  request(app)
    .get(`/v1/api/facsters/abdullah/superpower`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.same(res.statusCode, 200, 'Status code is 200');
      t.error(err, 'No error');
      t.same(
        res.body[0].superpower,
        'linting wizard',
        'Should return the superpower of a given facster'
      );
      t.end();
    });
});