//Fill this with many many tests YAY!! 😜😩
const test = require('tape');
const request = require('supertest');
const app = require('../server/server');

test('All routes should return the expected results', t => {
  request(app)
    .get('/facsters/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
test('First User Should be Abdullah', t => {
  request(app)
    .get('/facsters/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.same(res.body[0].firstname, 'Abdullah');
      t.end();
    });
});
test('Should be able to get a facster by their name', t => {
  const names = ['Aseel', 'Bart', 'Amelie', 'Abdullah'];
  names.forEach((name, index) => {
    request(app)
      .get(`/facsters/${name}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        t.error(err);
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
    .post(`/facster/new`)
    .send(facTwelver)
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.same(res.body[0].firstname, 'jason', 'Should add JSON bourne to FAC');
      t.end();
    });
});
test('Should find a facsters\' hobbies', t => {
  request(app)
    .get(`/facsters/bart/hobby`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.same(
        res.body[0].hobby,
        'Ninja training',
        'Should return the hobby of a given facster'
      );
      t.end();
    });
});
test('That it returns a given facster\'s superpower', t => {
  request(app)
    .get(`/facsters/abdullah/superpower`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.same(
        res.body[0].superpower,
        'linting wizard',
        'Should return the superpower of a given facster'
      );
      t.end();
    });
});
test.onFinish(() => process.exit(0));
