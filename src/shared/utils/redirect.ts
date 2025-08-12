import { useRouter } from 'vue-router';

export const useRedirect = () => {
  const router = useRouter();

  const redirectAfterAuth = () => {
    return router.push({ name: 'profile' });
  };

  const redirectAfterLogout = () => {
    return router.push({ name: 'login' });
  };

  return {
    redirectAfterAuth,
    redirectAfterLogout,
  };
};
