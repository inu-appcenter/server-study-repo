import { sqlExecute } from '.';

export async function getUserById(id) {
  const sql = 'SELECT * FROM user WHERE id = ?';
  return await sqlExecute(sql, [id]);
}

export async function updateUserById(id) {
  const sql = '';
  return await sqlExecute(sql, [1]);
}

export async function deleteUserById(id) {
  const sql = '';
  return await sqlExecute(sql, [1]);
}
