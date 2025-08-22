<template>
  <q-item clickable class="dialog-item">
    <q-item-section class="dialog-item-content">
      <q-avatar size="50px">
        <q-img src="src/assets/profile-icon.svg" alt="profile icon" />
      </q-avatar>
      <div class="column">
        <span>{{ chat?.displayName }}</span>
        <span>message</span>
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import type { IUser } from 'src/entities/user/model/user.types';

defineProps({
  chat: {
    type: Object as () => IUser | null,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.dialog-item {
}

.dialog-item-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}
</style>
