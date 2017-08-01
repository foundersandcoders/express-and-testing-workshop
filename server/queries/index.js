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

const getFacsterById = idObj => {
  const [{ id }] = idObj; //Id is returned as an object
  return db.query(`SELECT * FROM facsters WHERE facsters.id = $1`, id);
};

const addFacster = facster => {
  const { firstname, cohort, surname } = facster;
  return db.query(
    `INSERT INTO facsters(firstname, surname, cohort) VALUES($1,$2, $3) RETURNING ID`,
    [firstname, surname, cohort]
  );
};

const getFacsterHobby = name => {
  return getSingleFacster(name).then(person => {
    const [{ id }] = person; //This destructuring assignment takes the first variable out of the array then the value of the id key is assigned to the variable id
    return db.query(
      `SELECT f.firstname, f.surname, f.cohort, h.hobby, f.id, h.facster_id FROM facsters f,hobbies h WHERE f.id = $1 AND h.facster_id = $1`,
      id
    );
  });
};

const getFacsterSuperpower = name => {
  return getSingleFacster(name).then(person => {
    const [{ id }] = person;
    return db.query(
      `SELECT f.firstname, f.surname, f.cohort, h.superpower, f.id, h.superpower FROM facsters f,hobbies h WHERE f.id = $1 AND h.facster_id = $1`,
      id
    );
  });
};

module.exports = {
  getAll,
  getSingleFacster,
  getFacsterById,
  addFacster,
  getFacsterHobby,
  getFacsterSuperpower,
};
