<template>
  <q-dialog transition-show="slide-left" transition-hide="slide-right">
    <!-- TODO add 'maximized' prop to q-dialog when on mobile or tablet -->

    <q-card class="profile-panel">
      <q-card-actions class="profile-panel-header" align="between">
        <div>{{ $t('labels.profile') }}</div>
        <div>
          <q-btn icon="edit" flat padding="4px" size="15px" />
          <q-btn icon="close" flat padding="4px" size="15px" v-close-popup />
        </div>
      </q-card-actions>
      <q-card-section class="column items-center">
        <q-avatar size="100px">
          <q-img src="src/assets/profile-icon.svg" alt="profile icon" />
        </q-avatar>
        <span class="profile-name">{{ user?.displayName }}</span>
      </q-card-section>
      <q-card-section>
        <q-list>
          <q-item v-for="item in profilePanelItems" :key="item.label" class="column">
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
import { useUserStore } from 'src/entities/user/model/userStore';
import { useDialogPluginComponent } from 'quasar';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const userStore = useUserStore();

defineEmits([...useDialogPluginComponent.emits]);

const { user } = storeToRefs(userStore);

const profilePanelItems = [
  {
    label: t('auth.email'),
    data: user.value?.email,
  },
];
</script>

<style lang="scss" scoped>
.profile-panel {
  padding: 16px;
  max-width: 600px;
  width: 100%;
}

.profile-panel-header {
  font-size: 22px;
  font-weight: 500;
}

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
