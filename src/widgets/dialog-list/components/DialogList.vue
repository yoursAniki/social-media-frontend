<template>
  <q-scroll-area class="dialog-scroll-area" visible>
    <q-list>
      <dialog-item
        v-for="(chat, index) in chats"
        @click="chooseUser(chat)"
        :chat
        :key="index"
        class="q-py-xs"
      />
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts" setup>
import { DialogItem } from 'src/widgets/dialog-item';

import { useCurrentChatStore } from 'src/entities/current-chat/model/currentChatStore';
import type { IUser } from 'src/entities/user/model/user.types';

const currentChatStore = useCurrentChatStore();

const chats: IUser[] = [
  {
    displayName: 'John Doe',
    email: 'cHtUd@example.com',
    isTwoFactorEnabled: false,
  },
  {
    displayName: 'Jane Down',
    email: 'dfkfdmail.ru',
    isTwoFactorEnabled: false,
  },
  {
    displayName: 'Donald Tramp',
    email: 'tram2004@gmail.com',
    isTwoFactorEnabled: false,
  },
];

const chooseUser = (chat: IUser) => {
  currentChatStore.setChat(chat);
};
</script>

<style lang="scss" scoped>
.dialog-scroll-area {
  flex: 1 1 auto;
}
</style>
