const { verify } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = {
  isAuth: (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) res.status(401).json({ success: false, message: '토큰 없음' });
    else {
      const authList = auth.split(' ');
      if (authList[0] === 'Bearer') {
        req.user = verify(authList[1], JWT_SECRET);
        next();
      } else res.status(401).json({ success: false, message: '잘못된 토큰' });
    }
  },
};
