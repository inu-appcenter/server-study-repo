const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const path = require('path');

try {
  fs.accessSync('upload');
} catch (e) {
  fs.mkdirSync('upload');
}

// application middleware
app.use(express.static(path.join(__dirname, 'upload')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/users', require('./routes/user.router'));

// errorHandling
// todo: http-errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: true, message: err.message });
});

app.listen(9000, () => {
  console.log('start');
});
