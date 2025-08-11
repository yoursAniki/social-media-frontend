import { defineStore } from 'pinia';
import type { IUser } from './user.types';
import { LocalStorage } from 'quasar';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as IUser | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    setUser(user: IUser) {
      console.log(user, 'meoiooooooooooooooow');

      this.user = user;
      LocalStorage.set('user', user);
    },

    clearUser() {
      this.user = null;
      LocalStorage.remove('user');
    },

    init() {
      this.user = LocalStorage.getItem('user');
    },
  },
});
