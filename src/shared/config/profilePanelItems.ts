import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/entities/user/model/userStore';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

interface IItems {
  label: string;
  data: string;
}

export interface IProfilePanelItems {
  displayName: string;
  items: IItems[];
}

export const useProfilePanelItems = () => {
  const { t } = useI18n();
  const userStore = useUserStore();

  const { user } = storeToRefs(userStore);

  const profilePanelItems = computed<IProfilePanelItems>(() => {
    if (!user.value)
      return {
        displayName: '',
        items: [],
      };

    return {
      displayName: user.value.displayName,
      items: [
        {
          label: t('auth.email'),
          data: user.value.email,
        },
        {
          label: t('auth.twoFactorAuth'),
          data: user.value.isTwoFactorEnabled ? t('labels.enabled') : t('labels.disabled'),
        },
      ],
    };
  });

  return {
    profilePanelItems,
  };
};
