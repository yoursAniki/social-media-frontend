import { api } from 'src/boot/axios';

export const registerUser = (userRegisterData: {
  email: string;
  name: string;
  password: string;
  passwordRepeat: string;
}) => {
  return api.post('auth/register', userRegisterData);
};

export const confirmUser = (token: string) => {
  return api.post(`auth/email-confirmation`, { token });
};
