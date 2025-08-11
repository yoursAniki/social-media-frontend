import * as yup from 'yup';

const passwordSchema = yup
  .string()
  .min(6, 'Пароль должен содержать минимум 6 символов')
  .required('Пароль обязателен');

const emailSchema = yup.string().email('Некорректная почта').required('Почта обязательна');

export const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = yup.object({
  name: yup.string().required(),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .required('Подтвердите пароль')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});
