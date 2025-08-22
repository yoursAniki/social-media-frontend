<template>
  <q-scroll-area class="dialog-scroll-area" visible>
    <q-list>
      <dialog-item
        v-for="(n, index) in 100"
        @click="chooseUser(index)"
        :key="index"
        class="q-py-xs"
      />
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts" setup>
import { useCurrentChatStore } from 'src/entities/current-chat/model/currentChatStore';

import type { IUser } from 'src/entities/user/model/user.types';
import { DialogItem } from 'src/widgets/dialog-item';

const currentChatStore = useCurrentChatStore();

const chooseUser = (id: number) => {
  const user: IUser = {
    displayName: 'John Doe' + id,
    email: 'cHtUd@example.com',
    isTwoFactorEnabled: false,
  };

  currentChatStore.setChat(user);
};
</script>

<style lang="scss" scoped>
.dialog-scroll-area {
  flex: 1 1 auto;
}
</style>
