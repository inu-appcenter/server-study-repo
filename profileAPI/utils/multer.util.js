const multer = require('multer');

const uploadProfile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload');
    },
    // todo: 파일 형식 체크
    filename: (req, file, cb) => {
      const origin = file.originalname;
      const type = origin.split('.')[1];
      const { email } = req.user;
      cb(null, `${email.split('.')[0]}.${type}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

module.exports = {
  uploadProfile,
};
