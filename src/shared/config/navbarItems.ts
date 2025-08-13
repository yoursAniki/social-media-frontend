import { useI18n } from 'vue-i18n';
export interface NavigationItem {
  label: string;
  icon: string;
  to?: string;
  action?: 'logout';
  color?: string;
}

export const useNavBarItems = () => {
  const { t } = useI18n();

  const sidebarNavigation: NavigationItem[] = [
    {
      label: t('labels.profile'),
      icon: 'person',
      to: 'profile',
    },
    {
      label: t('labels.messages'),
      icon: 'chat',
      to: 'messages',
    },
    {
      label: t('labels.settings'),
      icon: 'settings',
      to: 'settings',
    },
    {
      label: t('auth.logout'),
      icon: 'logout',
      action: 'logout',
      color: 'negative',
    },
  ];

  return {
    sidebarNavigation,
  };
};
