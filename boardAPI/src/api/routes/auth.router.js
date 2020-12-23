import { Router } from 'express';
const router = Router();

function authRouter(root) {
  root.use('/auth', router);

  /**
   * @description 회원가입
   * @route POST /api/auth/register
   */
  router.post('/register', (req, res) => {
    console.log(1);
    res.end();
  });

  /**
   * @description 로그인
   * @route POST /api/auth/login
   */
  router.post('/login', (req, res) => {});
}

export default authRouter;
