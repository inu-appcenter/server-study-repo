const { getConn } = require('../database');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const { sign } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

router.post('/register', async (req, res, next) => {
  const { email, name, password } = req.body; // TODO: validator
  let conn;
  let result;
  try {
    conn = await getConn();
    const [[user]] = await conn.query('SELECT * FROM user WHERE email = ?', [
      email,
    ]);
    if (user) result = { success: false, message: '있는 이메일' };
    else {
      const hashPw = await bcrypt.hash(password, await bcrypt.genSalt(12));
      await conn.execute(
        'INSERT INTO user (email, name, password) VALUES (?,?,?)',
        [email, name, hashPw],
      );
      result = { success: true, message: '가입 성공' };
    }
  } catch (e) {
    next(e);
  } finally {
    if (conn) conn.release();
    if (!result.success) res.status(409).json(result);
    else res.status(201).json(result);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body; // TODO: validator
  let conn;
  let result;
  try {
    conn = await getConn();
    const [[user]] = await conn.query('SELECT * FROM user WHERE email = ?', [
      email,
    ]);
    if (!user) result = { success: false, message: '없는 이메일' };
    else {
      if (await bcrypt.compare(password, user.password)) {
        const token = sign({ id: user.id }, JWT_SECRET, { expiresIn: '30m' });
        result = { success: true, message: '로그인 성공', token };
      } else result = { success: false, message: '비밀번호 틀림' };
    }
  } catch (e) {
    next(e);
  } finally {
    if (conn) conn.release();
    if (!result.success) res.status(400).json(result);
    else res.status(201).json(result);
  }
});

module.exports = router;
