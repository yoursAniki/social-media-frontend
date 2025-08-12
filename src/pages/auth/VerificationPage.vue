<template>
  <q-page class="column items-center justify-evenly">
    <div>{{ confirmState.error ? 'Error' : 'Success' }}</div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useUserConfirm } from 'src/features/auth/register/model/userConfirm';
import { useRoute } from 'vue-router';

const route = useRoute();
const { onConfirm, confirmState } = useUserConfirm();

const confirmUser = async () => {
  const token = route.query.token as string;

  if (token) {
    await onConfirm(token);
  }
};

onMounted(async () => {
  await confirmUser();
});
</script>

<style></style>
