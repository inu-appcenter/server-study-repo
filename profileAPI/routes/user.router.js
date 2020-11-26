const { uploadProfile } = require('../utils/multer.util');
const router = require('express').Router();
const { verify } = require('../auth');

/**
 * @description 내 정보 조회
 * @route GET /users/profile
 */
router.get('/profile', (req, res, next) => {});

/**
 * @description 내 프로필 이미지 업로드
 * @route POST /users/profile
 */
router.post(
  '/profile',
  verify,
  uploadProfile.single('profile'),
  (req, res, next) => {
    let { email } = req.user;
    email = email.split('.')[0];
    res.json({
      path: `${req.hostname}/:9000/upload/${email}.${
        req.file.originalname.split('.')[1]
      }`,
    });
  },
);

module.exports = router;
