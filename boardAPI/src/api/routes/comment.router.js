import { Router } from 'express';
const router = Router();

function commentRouter(root) {
  root.use('/comment', router);

  /**
   * @description 댓글 등록
   * @route POST /api/comment
   */
  router.post('/', (req, res) => {});

  /**
   * @description 댓글 수정
   * @route PUT /api/comment/{id}
   */
  router.put('/:id', (req, res) => {});

  /**
   * @description 댓글 삭제
   * @route DELETE /api/comment/{id}
   */
  router.delete('/:id', (req, res) => {});
}

export default commentRouter;
