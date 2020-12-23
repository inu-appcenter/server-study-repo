import { Router } from 'express';
import { getProfile } from '../../controllers/user.controller';
const router = Router();

function userRouter(root) {
  root.use('/users', router);

  /**
   * @description 프로필 조회
   * @route GET /api/users/profile
   */
  router.get('/profile', getProfile);

  /**
   * @description 프로필 수정
   * @route PUT /api/users/profile
   */
  router.put('/profile', (req, res) => {});

  /**
   * @description 비밀번호 수정
   * @route PUT /api/users/profile/password
   */
  router.put('/profile/password', (req, res) => {});

  /**
   * @description 회원 탈퇴
   * @route DELETE /api/users/profile
   */
  router.delete('/profile', (req, res) => {});
}

export default userRouter;
