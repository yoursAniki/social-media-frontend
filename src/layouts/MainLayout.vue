<template>
  <q-layout view="lHr lpr lFr">
    <q-page-container>
      <router-view />
    </q-page-container>
    <sidebar-panel
      v-if="userStore.isAuthenticated && user?.displayName"
      @logout="logout"
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
import { logoutUser } from 'src/features/auth/logout/model/logout.api';
import { useRedirect } from 'src/shared/utils/redirect';

const userStore = useUserStore();
const { redirectAfterLogout } = useRedirect();

const { user } = storeToRefs(userStore);

const logout = async () => {
  try {
    await logoutUser();

    userStore.clearUser();

    await redirectAfterLogout();
  } catch (error) {
    console.error(error);
  }
};
</script>
