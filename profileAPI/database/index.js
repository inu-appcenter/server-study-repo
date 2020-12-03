const db = require('mysql2/promise');
const { DB_HOST, DB_USER, DB_PASSWORD } = require('../config');

const pool = db.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: 'appcenter',
  waitForConnections: true,
  connectionLimit: 5,
});

// (async () => {
//   const conn = await pool.getConnection();

//   await conn.execute(`
//       ALTER TABLE profile ADD CONSTRAINT user_profile_id_fk
//       FOREIGN KEY (user_id)
//       REFERENCES user (id) ON DELETE CASCADE
//   `);
//   console.log('end');
// })();

module.exports = {
  getConn: () => pool.getConnection(),
};
