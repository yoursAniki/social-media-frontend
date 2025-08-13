export const checkError = (error: unknown) => {
  let errorMessage = 'Неизвестная ошибка';

  if (typeof error === 'object' && error !== null && 'response' in error) {
    const axiosError = error as {
      response?: {
        data?: {
          message?: string;
        };
      };
    };

    errorMessage = axiosError.response?.data?.message || 'Ошибка сервера без деталей';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return errorMessage;
};
