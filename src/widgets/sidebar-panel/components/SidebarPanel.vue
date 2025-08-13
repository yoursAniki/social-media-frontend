<template>
  <div>
    <q-drawer class="sidebar-panel" show-if-above side="right" bordered mini>
      <burger-menu-icon class="cursor-pointer" @click="isOpen = !isOpen" color="black" />
    </q-drawer>

    <!-- 425px max phone width -->
    <q-drawer
      v-model="isOpen"
      ref="sidebarPanelRef"
      class="main-panel"
      side="right"
      bordered
      :width="300"
      :breakpoint="426"
    >
      <h1 class="sidebar-title">{{ displayName }}</h1>

      <q-list class="sidebar-list">
        <q-item
          v-for="item in navItems"
          @click="item.action === 'logout' && handleLogout()"
          clickable
          :key="item.label"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" :color="item.color" size="30px" />
          </q-item-section>
          <q-item-section :class="item.color">
            {{ item.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onClickOutside, onKeyStroke } from '@vueuse/core';
import type { NavigationItem } from 'src/shared/config/navbarItems';
import BurgerMenuIcon from 'src/shared/ui/icons/BurgerMenuIcon.vue';

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

const emit = defineEmits(['logout']);

const isOpen = ref(false);

const sidebarPanelRef = ref(null);

onClickOutside(sidebarPanelRef, () => {
  if (isOpen.value) isOpen.value = false;
});

onKeyStroke('Escape', () => {
  if (isOpen.value) isOpen.value = false;
});

const handleLogout = () => {
  emit('logout');
};
</script>

<style lang="scss">
.sidebar-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sidebar-title {
  margin: 0;
  font-size: 26px;
  font-weight: 400;
  line-height: 60px;
  align-self: center;
}

.sidebar-list {
  width: 100%;
}
</style>
