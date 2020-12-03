const { verify } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = {
  isAuth: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) res.status(401).json({ success: false });
    else {
      const accessToken = token.split(' ');
      if (accessToken[0] !== 'Bearer') res.status(401).json({ success: false });
      else {
        req.user = verify(accessToken[1], JWT_SECRET);
        next();
      }
    }
  },
};
