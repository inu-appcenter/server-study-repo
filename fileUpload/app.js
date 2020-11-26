const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const { upload1 } = require('./utils/multer.util');

try {
  fs.accessSync('upload');
} catch (error) {
  fs.mkdirSync('upload');
}

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 하나의 파일 업로드, body
app.all('/single', upload1.single('simple_file'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body.tttttt);
  res.end();
});

app.listen(9000, () => {
  console.log('start');
});
