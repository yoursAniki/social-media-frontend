import { api } from 'src/boot/axios';

export const logoutUser = () => {
  return api.post('auth/logout');
};
