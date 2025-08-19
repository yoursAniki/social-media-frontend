<template>
  <div class="dialog-display">
    <dialog-header v-if="user" displayName="Dialog Display" />
    <div class="dialog-display-content">
      <q-scroll-area v-if="user" style="height: 100%" visible>
        <div v-for="(n, index) in 100" :key="index" class="q-py-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </q-scroll-area>
      <div class="choose-who" v-else>
        {{ $t('dialog.chooseWhoWantToWrite') }}
      </div>
    </div>
    <dialog-input v-if="user" />
  </div>
</template>

<script lang="ts" setup>
import { DialogHeader } from 'src/widgets/dialog-header';
import { DialogInput } from 'src/widgets/dialog-input';

const user = null;
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
}

.choose-who {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
