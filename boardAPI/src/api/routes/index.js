import { Router } from 'express';
import authRouter from './auth.router';
import commentRouter from './comment.router';
import postRouter from './post.router';
import userRouter from './user.router';
const rootRouter = Router();

function router() {
  authRouter(rootRouter);
  commentRouter(rootRouter);
  postRouter(rootRouter);
  userRouter(rootRouter);
  return rootRouter;
}

export default router;
