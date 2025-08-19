<template>
  <q-toolbar class="dialog-header">
    <q-toolbar-title class="dialog-header-title">{{ displayName }}</q-toolbar-title>
  </q-toolbar>
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
.dialog-header {
  width: 100%;
}
</style>
