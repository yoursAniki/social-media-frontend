<template>
  <q-dialog transition-show="slide-left" transition-hide="slide-right">
    <!-- TODO add 'maximized' prop to q-dialog when on mobile or tablet -->

    <q-card class="panel-card">
      <panel-header edit-mode :label="$t('labels.profile')" />
      <q-card-section class="column items-center">
        <q-avatar size="100px">
          <q-img src="src/assets/profile-icon.svg" alt="profile icon" />
        </q-avatar>
        <span class="profile-name">{{ profilePanelItems.displayName }}</span>
      </q-card-section>
      <q-card-section>
        <q-list>
          <q-item v-for="item in profilePanelItems.items" :key="item.label" class="column">
            <q-item-section>
              {{ item.data }}
            </q-item-section>
            <q-item-label class="profile-option-label">
              {{ item.label }}
            </q-item-label>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useDialogPluginComponent } from 'quasar';
import { useProfilePanelItems } from 'src/shared/config/profilePanelItems';
import { PanelHeader } from 'src/widgets/panel-header';

defineEmits([...useDialogPluginComponent.emits]);

const { profilePanelItems } = useProfilePanelItems();
</script>

<style lang="scss" scoped>
.profile-name {
  font-size: 20px;
  font-weight: 500;
  margin-top: 4px;
}

.profile-option-label {
  color: $grey-5;
  user-select: none;
}
</style>
