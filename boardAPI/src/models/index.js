import db, { format } from 'mysql2/promise';
import config from '../config';

const pool = db.createPool({
  ...config.db,
  database: 'board',
  connectionLimit: 10,
  waitForConnections: true,
});

export async function sqlExecute(sql, values = []) {
  return new Promise(async (resolve, reject) => {
    let conn;
    try {
      conn = await pool.getConnection();
      const query = format(sql, values);
      const [[result]] = await conn.execute(query);
      conn.release();
      resolve(result);
    } catch (error) {
      if (conn) conn.release();
      reject(error);
    }
  });
}
export function transaction() {}
