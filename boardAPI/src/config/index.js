import dotenv from 'dotenv';
import dbConfig from './db.config';

const env = dotenv.config();
if (env.error) throw Error('.env 없음');

export default {
  db: { ...dbConfig },
  port: process.env.PORT,
};
