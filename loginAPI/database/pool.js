const db = require('mysql2/promise');
const { DB_HOST, DB_USER, DB_PASSWORD } = require('../config');

const pool = db.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: 'test',
  waitForConnections: true,
  connectionLimit: 5,
});

module.exports = {
  getConn: () => pool.getConnection(),
};
