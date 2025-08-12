export interface NavigationItem {
  label: string;
  icon: string;
  to: string;
}

export const sidebarNavigation: NavigationItem[] = [
  {
    label: 'Профиль',
    icon: 'person',
    to: 'profile',
  },
  {
    label: 'Настройки',
    icon: 'settings',
    to: 'settings',
  },
  {
    label: 'Сообщения',
    icon: 'chat',
    to: 'messages',
  },
];
