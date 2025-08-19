<template>
  <q-input
    v-model="search"
    dense
    outlined
    clearable
    :placeholder="$t('labels.search')"
    clear-icon="close"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const search = ref('');
</script>

<style></style>
