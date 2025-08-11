<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from 'src/entities/user/model/userStore';

const userStore = useUserStore();

onMounted(() => {
  userStore.init();
});
</script>
