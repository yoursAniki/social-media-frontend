<template>
  <div class="dialog-search-wrapper">
    <q-input
      v-model="search"
      class="dialog-search"
      dense
      outlined
      clearable
      :placeholder="$t('labels.search')"
      clear-icon="close"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const search = ref('');
</script>

<style lang="scss">
.dialog-search-wrapper {
  height: 72px;
  padding: 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .dialog-search {
    width: 100%;
  }
}
</style>
