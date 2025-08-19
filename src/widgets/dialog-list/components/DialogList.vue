<template>
  <q-scroll-area visible class="dialog-list">
    <q-list>
      <dialog-item
        v-for="(n, index) in 100"
        @click="console.log('meeeow')"
        :key="index"
        class="q-py-xs"
      />
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts" setup>
import { DialogItem } from 'src/widgets/dialog-item';
</script>

<style lang="scss" scoped>
.dialog-list {
  flex: 1 1 auto;
}
</style>
