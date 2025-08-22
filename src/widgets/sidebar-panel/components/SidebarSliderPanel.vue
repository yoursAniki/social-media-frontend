<template>
  <q-dialog
    ref="sidebarSliderPanelRef"
    class="sidebar-slider-panel"
    full-height
    position="left"
    transition-show="slide-right"
    transition-hide="slide-left"
  >
    <q-card class="main-panel">
      <h1 class="sidebar-title">{{ displayName }}</h1>

      <q-list class="sidebar-list">
        <q-item
          v-for="item in navItems"
          @click="handleItemClick(item.action)"
          clickable
          :key="item.label"
        >
          <q-item-section class="sidebar-item-section" :class="item.color">
            <q-icon :name="item.icon" :color="item.color" size="30px" />
            <span>{{ item.label }}</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { QDialog, useDialogPluginComponent } from 'quasar';
import { usePanelsToggle } from 'src/features/panels-toggle/model/panelsToggle';
import type { NavigationItem } from 'src/shared/config/navbarItems';
import { ref } from 'vue';
import { useUserLogout } from 'src/features/auth/logout/model/userLogout';

const emit = defineEmits([...useDialogPluginComponent.emits]);

const { openProfilePanel, openSettingsPanel } = usePanelsToggle();
const { logout } = useUserLogout();

defineProps({
  displayName: {
    type: String,
    required: true,
  },
  navItems: {
    type: Array as () => NavigationItem[],
    required: true,
  },
});

const sidebarSliderPanelRef = ref<QDialog>();

const handleItemClick = async (action: string) => {
  sidebarSliderPanelRef.value?.hide();

  switch (action) {
    case 'logout':
      await logout();
      break;
    case 'profile':
      openProfilePanel();
      break;
    case 'settings':
      openSettingsPanel();
      break;
  }
};
</script>

<style lang="scss">
.sidebar-slider-panel {
  .q-dialog__inner {
    padding: 0;
  }
}

.sidebar-title {
  margin: 0;
  font-size: 26px;
  font-weight: 400;
  line-height: 60px;
  align-self: center;
}

.main-panel {
  background: $dark-white;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 350px;
}

.sidebar-list {
  width: 100%;
}

.sidebar-item-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  padding: 0 5px;
  width: 100%;
}
</style>
