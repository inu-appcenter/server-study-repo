import { Router } from 'express';
const router = Router();

function postRouter(root) {
  root.use('/posts', router);

  /**
   * @description 게시글 작성
   * @route POST /api/posts
   */
  router.post('/posts', (req, res) => {});

  /**
   * @description 게시글 모두 조회
   * @route GET /api/posts
   * todo: 페이지네이션
   */
  router.get('/posts', (req, res) => {});

  /**
   * @description 게시글 상세 조회
   * @route GET /api/posts/{id}
   * todo: 페이지네이션
   */
  router.get('/posts/:id', (req, res) => {});

  /**
   * @description 게시글 수정
   * @route PUT /api/posts/{id}
   * todo: 페이지네이션
   */
  router.put('/posts/:id', (req, res) => {});

  /**
   * @description 게시글 삭제
   * @route DELETE /api/posts/{id}
   * todo: 페이지네이션
   */
  router.delete('/posts/:id', (req, res) => {});

  /**
   * @description 게시글 좋아요
   * @route patch /api/posts/{id}/liked
   * todo: 페이지네이션
   */
  router.patch('/posts/:id/liked', (req, res) => {});
}

export default postRouter;
