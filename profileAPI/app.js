const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { PORT } = require('./config');
const fs = require('fs');
const app = express();

if (!fs.existsSync('upload')) fs.mkdirSync('upload');

// Application Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use('/auth', require('./routes/auth.router'));
app.use('/users', require('./routes/users.router'));

// Not Found
app.use('*', (req, res, next) => {
  res.status(404).json({ success: false, message: 'Not Found' });
});

// Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, error: err.toString() });
});

// Port Binding
app.listen(PORT, err => {
  if (err) {
    console.error(err);
    process.exit();
  } else console.log('start!');
});
