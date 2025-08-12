import { api } from 'src/boot/axios';

export const loginUser = (userLoginData: { email: string; password: string }) => {
  return api.post('auth/login', userLoginData);
};
