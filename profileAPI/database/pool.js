const db = require('mysql2/promise');

const pool = db.createPool({
  host: 'localhost',
  user: 'root',
  password: '9036',
  database: 'profile',
  connectionLimit: 5,
  waitForConnections: true,
});

module.exports = {
  getConn: () => pool.getConnection(),
};
