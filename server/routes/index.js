const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) =>
  queries
    .getAll()
    .then(users => res.status(200).json(users))
    .catch(err => next(err))
);

router.get('/users/:id', ({ params: { id } }, res, next) => {
  queries
    .getSingleUser(id)
    .then(user => res.status(200).json(user))
    .catch(err => next(err));
});

router.post('/user/new', ({ body }, res, next) => {
  queries
    .addUser(body)
    .then(userID => queries.getSingleUser(userID))
    .then(user => res.status(200).json(user))
    .catch(err => next(err));
});

router.get('/users/:id/medication', ({ params: { id }, body }, res, next) => {
  queries
    .getSingleMed(id)
    .then(medication => res.status(200).json(medication))
    .catch(err => next(err));
});

router.put('/users/:id/medication', ({ params: { id }, body }, res, next) => {
  queries
    .updateMedication(id, body)
    .then(() => queries.getSingleMed(id))
    .then(user => res.status(200).json(user))
    .catch(err => next(err));
});

router.post('/users/:id/evening', ({ body }, res, next) => {
  queries
    .addEveningCheck(body)
    .then(id => queries.getEveningCheck(id, body.date_of_check))
    .then(check => res.status(200).json(check))
    .catch(err => next(err));
});

router.get(
  '/users/:id/evening/:date',
  ({ params: { id, date } }, res, next) => {
    queries
      .getEveningCheck(id, date)
      .then(check => res.status(200).json(check))
      .catch(err => next(err));
  }
);

router.get(
  '/users/:id/two_weekly/:date',
  ({ params: { id, date } }, res, next) => {
    queries
      .getTwoWeeklyCheck(id, date)
      .then(check => res.status(200).json(check))
      .catch(err => next(err));
  }
);

module.exports = router;
