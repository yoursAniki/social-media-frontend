<template>
  <q-layout view="lHr lpr lFr">
    <q-page-container>
      <router-view />
    </q-page-container>
    <sidebar-panel
      v-if="userStore.isAuthenticated && user?.displayName"
      :display-name="user.displayName"
      :nav-items="sidebarNavigation"
    />
  </q-layout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/entities/user/model/userStore';
import { SidebarPanel } from 'src/widgets/sidebar-panel';
import { sidebarNavigation } from 'src/shared/config/navbarItems';

const userStore = useUserStore();

const { user } = storeToRefs(userStore);
</script>
