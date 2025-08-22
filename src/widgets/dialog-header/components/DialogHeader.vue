<template>
  <div class="dialog-header-wrapper">
    <q-toolbar class="dialog-header">
      <q-toolbar-title class="dialog-header-title">{{ displayName }}</q-toolbar-title>
    </q-toolbar>
    <q-btn class="dialog-header-button" icon="more_vert" flat />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  displayName: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
.dialog-header-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.dialog-header {
  width: 100%;
  height: 72px;
}

.dialog-header-button {
  height: 100%;
  width: 72px;
}
</style>
