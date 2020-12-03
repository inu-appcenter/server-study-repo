const { isAuth } = require('../middlewares/auth.middleware');

const router = require('express').Router();

router.use(isAuth);

router.get('/', (req, res, next) => {
  const { id } = req.user;
  console.log(id);
  res.end();
  // db -> select -> res
});

module.exports = router;
