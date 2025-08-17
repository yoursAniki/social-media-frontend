import { useI18n } from 'vue-i18n';

export const useErrorCheck = () => {
  const { t } = useI18n();

  const checkError = (error: unknown) => {
    let errorMessage = t('errors.unknownError');

    if (typeof error === 'object' && error !== null && 'response' in error) {
      const axiosError = error as {
        response?: {
          data?: {
            message?: string;
          };
        };
      };

      errorMessage = axiosError.response?.data?.message || t('errors.errorWithoutDetails');
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return errorMessage;
  };

  return {
    checkError,
  };
};
