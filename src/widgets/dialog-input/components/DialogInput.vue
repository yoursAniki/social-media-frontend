<template>
  <q-input v-model="message" outlined :placeholder="$t('labels.message')">
    <template v-slot:append>
      <q-btn round dense flat icon="add" />
    </template>
  </q-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('');
</script>

<style></style>
