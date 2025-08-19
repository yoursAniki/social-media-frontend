<template>
  <q-item clickable class="dialog-message">
    <q-item-section class="dialog-message-content">
      <q-avatar size="50px">
        <q-img src="src/assets/profile-icon.svg" alt="profile icon" />
      </q-avatar>
      <div class="column">
        <span>name</span>
        <span>message</span>
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.dialog-message {
}

.dialog-message-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}
</style>
