import { useErrorCheck } from 'src/shared/utils/errorCheck';
import { useRedirect } from 'src/shared/utils/redirect';

import { useUserStore } from 'src/entities/user/model/userStore';
import { logoutUser } from 'src/features/auth/logout/model/logout.api';
import { errorNotify } from 'src/shared/config/notifyItems';

export const useUserLogout = () => {
  const userStore = useUserStore();
  const { checkError } = useErrorCheck();
  const { redirectAfterLogout } = useRedirect();

  const logout = async () => {
    try {
      await logoutUser();

      userStore.clearUser();

      await redirectAfterLogout();
    } catch (error) {
      console.error(error);

      const resultError = checkError(error);

      errorNotify(resultError);
    }
  };

  return { logout };
};
