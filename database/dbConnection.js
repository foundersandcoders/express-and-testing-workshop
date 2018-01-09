const pgp = require('pg-promise')();

const herokuDB = {
  host: process.env.HEROKU_HOST,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PW,
  database: process.env.HEROKU_DB,
  ssl: true,
};

const localDB = {
  host: 'localhost',
  port: 5432,
  database: 'fac-express',
  // linux users: please uncomment the following 2 lines
  // user: super,
  // password: password
};

const connection = process.env.NODE_ENV === 'production' ? herokuDB : localDB;

const db = pgp(connection);
module.exports = db;
