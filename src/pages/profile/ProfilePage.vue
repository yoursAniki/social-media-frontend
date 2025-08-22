<template>
  <q-page class="profile-page">
    <div class="dialog-list-container">
      <div>
        <dialog-search />
      </div>
      <dialog-list />
    </div>

    <dialog-display :chat="currentChatStore.currentChat" />
  </q-page>
</template>

<script lang="ts" setup>
import { DialogSearch } from 'src/widgets/dialog-search';
import { DialogList } from 'src/widgets/dialog-list';
import { DialogDisplay } from 'src/widgets/dialog-display';

import { useCurrentChatStore } from 'src/entities/current-chat/model/currentChatStore';
import { onKeyStroke } from '@vueuse/core';

const currentChatStore = useCurrentChatStore();

onKeyStroke('Escape', () => {
  if (currentChatStore.currentChat) {
    currentChatStore.clearChat();
  }
});
</script>

<style lang="scss">
.profile-page {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100vh;
}

.dialog-list-container {
  display: flex;
  flex-direction: column;

  width: 300px;
  min-width: 300px;
  max-width: 300px;
}
</style>
