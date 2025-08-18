import { defineStore } from 'pinia';
import { LocalStorage, Dark } from 'quasar';
import type { TDarkMode } from './theme.types';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: false as TDarkMode,
  }),

  actions: {
    setTheme(mode: TDarkMode) {
      this.isDarkMode = mode;
      Dark.set(mode);
      LocalStorage.set('theme', mode);
    },

    init() {
      const mode = (LocalStorage.getItem('theme') as TDarkMode) ?? false;

      this.setTheme(mode);
    },
  },
});
