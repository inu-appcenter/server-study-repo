const { UPLOAD_PROFILE_FILENAME, DOMAIN } = require('../config');
const { getConn } = require('../database');
const { isAuth } = require('../middlewares/auth.middleware');
const { profileUpload } = require('../middlewares/upload.middleware');
const router = require('express').Router();

router.use(isAuth);

router.get('/profile', async (req, res, next) => {
  let conn;
  let result;
  try {
    conn = await getConn();
    const [
      images,
    ] = await conn.query('SELECT id, path FROM profile WHERE user_id = ?', [
      req.user.id,
    ]);
    result = {
      success: true,
      images: images.map(image => ({
        id: image.id,
        path: `${DOMAIN}${image.path}`,
      })),
    };
  } catch (e) {
    next(e);
  } finally {
    if (conn) conn.release();
    res.status(200).json(result);
  }
});

router.post(
  '/image',
  profileUpload.single(UPLOAD_PROFILE_FILENAME),
  async (req, res, next) => {
    let conn;
    let result;
    try {
      conn = await getConn();
      // http://host:port/path
      await conn.execute('INSERT INTO profile (path, user_id) VALUES (?, ?)', [
        `upload/${req.profile}`,
        req.user.id,
      ]);
      result = { success: true, message: '업로드 성공' };
    } catch (e) {
      next(e);
    } finally {
      if (conn) conn.release();
      res.status(201).json(result);
    }
  },
);

// TODO: db delete, fs delete
router.delete('/image', (req, res) => {});

module.exports = router;
