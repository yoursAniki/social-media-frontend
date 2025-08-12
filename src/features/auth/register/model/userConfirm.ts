import { reactive } from 'vue';
import { useUserStore } from 'src/entities/user/model/userStore';
import { confirmUser } from './register.api';
import type { IUser } from 'src/entities/user/model/user.types';
import { useRedirect } from 'src/shared/utils/redirect';

export const useUserConfirm = () => {
  const userStore = useUserStore();
  const { redirectAfterAuth } = useRedirect();

  const confirmState = reactive({
    loading: false,
    error: false,
  });

  const onConfirm = async (token: string) => {
    try {
      confirmState.loading = true;
      confirmState.error = false;
      const response = await confirmUser(token);

      const user: IUser = {
        displayName: response.data.user.displayName,
        isTwoFactorEnabled: response.data.user.isTwoFactorEnabled,
        email: response.data.user.email,
      };

      userStore.setUser(user);

      await redirectAfterAuth();
    } catch (error) {
      confirmState.error = true;
      console.log(error);
    } finally {
      confirmState.loading = false;
    }
  };

  return {
    onConfirm,
    confirmState,
  };
};
