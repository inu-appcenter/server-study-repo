const router = require('express').Router();
const bcrypt = require('bcrypt');
const { getConn } = require('../database/pool');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

router.post('/register', async (req, res, next) => {
  // TODO: validator
  const { email, name, password } = req.body;
  let conn;
  let result;
  try {
    conn = await getConn();
    const [[user]] = await conn.query('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
    if (user) result = { success: false, message: '이미 가입함' };
    else {
      const hashPw = await bcrypt.hash(password, await bcrypt.genSalt(12));
      await conn.execute(
        `INSERT INTO users (email, name, password) VALUES (?, ?, ?)`,
        [email, name, hashPw],
      );
      result = { success: true, message: '가입 완료' };
    }
  } catch (e) {
    console.error(e);
    next(e);
  } finally {
    if (conn) conn.release();
    if (!result.success) res.status(409).json(result);
    else res.status(201).json(result);
  }
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  let conn;
  let result;
  try {
    conn = await getConn().catch(next);
    const [[user]] = await conn.query('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
    if (!user) result = { success: false, message: '없는 이메일' };
    else {
      if (await bcrypt.compare(password, user.password)) {
        // 토큰 발급
        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
          expiresIn: '1m',
        });
        result = {
          success: true,
          message: '로그인 성공',
          token,
        };
      } else result = { success: false, message: '비밀번호 틀림' };
    }
  } catch (e) {
    console.error(e);
    next(e);
  } finally {
    if (conn) conn.release();
    if (!result.success) res.status(400).json(result);
    else res.status(201).json(result);
  }
});

module.exports = router;
