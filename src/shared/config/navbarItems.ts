export interface NavigationItem {
  label: string;
  icon: string;
  to?: string;
  action?: 'logout';
  color?: string;
}

export const sidebarNavigation: NavigationItem[] = [
  {
    label: 'Профиль',
    icon: 'person',
    to: 'profile',
  },
  {
    label: 'Сообщения',
    icon: 'chat',
    to: 'messages',
  },
  {
    label: 'Настройки',
    icon: 'settings',
    to: 'settings',
  },
  {
    label: 'Выйти',
    icon: 'logout',
    action: 'logout',
    color: 'negative',
  },
];
