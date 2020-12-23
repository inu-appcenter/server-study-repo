import { getUserById } from '../models/user.model';

const UserService = {
  getProfile: async id => {
    const user = await getUserById(id);

    return user;
  },
};

export default UserService;
