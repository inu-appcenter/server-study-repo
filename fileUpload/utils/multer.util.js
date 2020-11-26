const multer = require('multer');

const upload1 = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (!file) cb(Error('파일 없음'));
      else cb(null, 'upload');
    },
    filename: (req, file, cb) => {
      const ori = file.originalname;
      const now = Date.now();
      cb(null, `${now}_${ori}`);
    },
  }),
  limits: { fileSize: 20 },
});

module.exports = {
  upload1,
};
