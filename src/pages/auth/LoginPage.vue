<template>
  <q-page class="column items-center justify-evenly">
    <auth-card :is-register="false" />
  </q-page>
</template>

<script setup lang="ts">
import { AuthCard } from 'src/features/auth/';
</script>
