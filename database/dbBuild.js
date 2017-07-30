const { QueryFile } = require('pg-promise');
const path = require('path');
const db = require('./dbConnection');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql('./dbBuild.sql');

db
  .query(build)
  .then(res => console.log('res', res))
  .catch(e => console.error('error', e));
