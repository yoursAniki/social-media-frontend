import { api } from 'src/boot/axios';

export const loginUser = (user: { email: string; password: string }) => {
  return api.post('auth/login', user);
};
