const multer = require('multer');

const profileUpload = multer({
  fileFilter: (req, file, cb) => {
    if (!file) cb(new Error('파일 없음'), false);
    else {
      const arr = file.originalname.split('.');
      let type = arr[arr.length - 1]; // PNG, JPG, JPEG
      type = type.toLowerCase();
      if (type === 'png' || type === 'jpg' || type === 'jpeg') cb(null, true);
      else cb(null, false);
    }
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload');
    },
    filename: (req, file, cb) => {
      const arr = file.originalname.split('.');
      let type = arr[arr.length - 1];
      req.profile = `${Date.now()}.${type}`;
      cb(null, `${Date.now()}.${type}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

module.exports = {
  profileUpload,
};
