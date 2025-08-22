<template>
  <div class="dialog-input-wrapper">
    <q-input v-model="message" class="dialog-input" outlined :placeholder="$t('labels.message')">
    </q-input>
    <q-btn class="send-button" icon="send" size="15px" flat />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('');
</script>

<style lang="scss" scoped>
.dialog-input-wrapper {
  display: flex;
  flex-direction: row;

  .dialog-input {
    flex: 1 1 auto;
  }

  ::v-deep(.q-field--outlined .q-field__control:after) {
    border: none !important;
  }

  ::v-deep(.q-field--outlined .q-field__control:before) {
    border: none !important;
  }
}
</style>
