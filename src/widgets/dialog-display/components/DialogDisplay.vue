<template>
  <div class="dialog-display">
    <dialog-header v-if="chat" :displayName="chat.displayName" />

    <div class="dialog-display-content">
      <q-scroll-area v-if="chat" style="height: 100%" visible>
        <q-list class="dialog-message-list">
          <dialog-message v-for="(n, index) in 100" :text="['test text']" :key="index" class="q-py-xs" />
        </q-list>
      </q-scroll-area>
      <div class="choose-who" v-else>
        {{ $t('dialog.chooseWhoWantToWrite') }}
      </div>
    </div>
    <dialog-input v-if="chat" />
  </div>
</template>

<script lang="ts" setup>
import { DialogHeader } from 'src/widgets/dialog-header';
import { DialogInput } from 'src/widgets/dialog-input';
import { DialogMessage } from 'src/widgets/dialog-message';

import type { IUser } from 'src/entities/user/model/user.types';

defineProps({
  chat: {
    type: Object as () => IUser | null,
    required: false,
  },
});
</script>

<style lang="scss">
.dialog-display {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
}

.dialog-display-content {
  flex: 1 1 auto;
  background: $dark-white;
}

.dialog-message-list {
  padding: 16px;
}

.choose-who {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
