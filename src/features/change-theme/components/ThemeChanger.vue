<template>
  <q-toggle v-model="isDarkMode" toggle-indeterminate indeterminate-value="auto" size="48px" />
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

<style lang="scss"></style>
