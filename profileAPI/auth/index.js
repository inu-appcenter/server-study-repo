const authMiddleware = {
  verify: (req, res, next) => {
    // todo: db, token(cookie&session)
    req.user = { email: 'taeho@taeho.com' };
    next();
  },
};

module.exports = authMiddleware;
