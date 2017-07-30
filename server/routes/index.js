const express = require('express');
const router = express.Router();

router.get('/facsters', (req, res, next) =>
  queries
    .getAll()
    .then(users => res.status(200).json(users))
    .catch(err => next(err))
);

router.get('/facsters/:id', ({ params: { id } }, res, next) => {
  queries
    .getSingleUser(id)
    .then(user => res.status(200).json(user))
    .catch(err => next(err));
});

router.post('/facster/new', ({ body }, res, next) => {
  queries
    .addUser(body)
    .then(userID => queries.getSingleUser(userID))
    .then(user => res.status(200).json(user))
    .catch(err => next(err));
});

router.get('/facsters/:id/hobby', ({ params: { id }, body }, res, next) => {
  queries
    .getSingleMed(id)
    .then(medication => res.status(200).json(medication))
    .catch(err => next(err));
});

router.put('/facster/:id/superpower', ({ params: { id }, body }, res, next) => {
  queries
    .updateMedication(id, body)
    .then(() => queries.getSingleMed(id))
    .then(user => res.status(200).json(user))
    .catch(err => next(err));
});

router.get(
  '/facster/:id/superpower&hobby',
  ({ params: { id, date } }, res, next) => {
    queries
      .getEveningCheck(id, date)
      .then(check => res.status(200).json(check))
      .catch(err => next(err));
  }
);

module.exports = router;
