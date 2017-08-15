'use strict';
const express = require('express');
const { Router } = express; //Here we destructure (ES6) the Router value off of express
const router = Router();
const queries = require('./queries');

/* TODO This is an example of a route made by using the queries defined in queries.js */
router.get('/facsters', (req, res, next) =>
  queries
    .getAll()
    .then(users => res.status(200).json(users))
    .catch(err => next(err))
);
// =========================================================
// Create Routes Here
// =========================================================
/*
 * '/facsters/:name'
 */

/*
 * '/facster/new'
 */

/*
 * '/facsters/:name/hobby'
 */

/*
 * '/facsters/:name/superpower'
 */

module.exports = router;
