<template>
  <q-toggle size="48px" v-model="isDarkMode" />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useThemeStore } from 'src/entities/theme/model/themeStore';

const isDarkMode = ref(useThemeStore().isDarkMode);

watch(
  () => isDarkMode.value,
  (value) => {
    useThemeStore().setTheme(value);
  },
);
</script>

<style lang="scss">
</style>
