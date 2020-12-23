import { getUserById } from '../models/user.model';
import UserService from '../services/user.service';

export async function getProfile(req, res, next) {
  const user = req.user;
  const result = await UserService.getProfile(1);
  if (result instanceof Error) next(result);
  else res.status(200).json({ success: true, user: result });
}
