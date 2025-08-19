<template>
  <q-drawer class="sidebar-panel" show-if-above side="left" bordered mini :mini-width="80">
    <q-icon class="cursor-pointer" name="toc" size="45px" @click="openSlidePanel" />
  </q-drawer>
</template>

<script lang="ts" setup>
import { Dialog } from 'quasar';
import SidebarSliderPanel from 'src/widgets/sidebar-panel/components/SidebarSliderPanel.vue';
import type { NavigationItem } from 'src/shared/config/navbarItems';

const props = defineProps({
  displayName: {
    type: String,
    required: true,
  },
  navItems: {
    type: Array as () => NavigationItem[],
    required: true,
  },
  
});

const openSlidePanel = () => {
  Dialog.create({
    component: SidebarSliderPanel,
    componentProps: {
      displayName: props.displayName,
      navItems: props.navItems,
    },
  });
};
</script>

<style lang="scss">
.sidebar-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
