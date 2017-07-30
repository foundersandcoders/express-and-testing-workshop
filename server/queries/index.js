const db = require('./../../database/dbConnection');

//Below are the functions you should test

const capitaliseName = name => {
  const Cap = name[0].toUpperCase();
  return Cap + name.slice(1);
};

const getAll = () => db.query(`SELECT * FROM facsters`);

const getSingleFacster = name =>
  db.query(
    `SELECT * FROM facsters WHERE facsters.firstname = $1`,
    capitaliseName(name)
  );

const getFacsterById = id =>
  db.query(`SELECT * FROM facsters WHERE facsters.id = $1`, id);

const addFacster = facster => {
  const { firstname, cohort, surname } = facster;
  return db.query(
    `INSERT INTO facsters(firstname, surname, cohort) VALUES($1,$2, $3) RETURNING ID`,
    [firstname, surname, cohort]
  );
};

module.exports = {
  getAll,
  getSingleFacster,
  getFacsterById,
  addFacster,
};
