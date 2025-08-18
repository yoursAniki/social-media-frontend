import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
export interface NavigationItem {
  label: string;
  icon: string;
  action: 'logout' | 'profile' | 'messages' | 'settings';
  color?: string;
}

export const useNavBarItems = () => {
  const { t } = useI18n();

  const sidebarNavigation = computed<NavigationItem[]>(() => {
    return [
      {
        label: t('labels.profile'),
        icon: 'person',
        action: 'profile',
      },
      {
        label: t('labels.messages'),
        icon: 'chat',
        action: 'messages',
      },
      {
        label: t('labels.settings'),
        icon: 'settings',
        action: 'settings',
      },
      {
        label: t('auth.logout'),
        icon: 'logout',
        action: 'logout',
        color: 'negative',
      },
    ];
  });

  return {
    sidebarNavigation,
  };
};
