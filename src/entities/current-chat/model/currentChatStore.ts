import { defineStore } from 'pinia';
import type { IUser } from 'src/entities/user/model/user.types';

export const useCurrentChatStore = defineStore('currentChat', {
  state: () => ({
    currentChat: null as IUser | null,
  }),

  actions: {
    setChat(user: IUser) {
      this.currentChat = user;
    },

    clearChat() {
      this.currentChat = null;
    },
  },
});
