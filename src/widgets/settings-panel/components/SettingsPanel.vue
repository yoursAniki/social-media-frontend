<template>
  <q-dialog transition-show="slide-left" transition-hide="slide-right">
    <!-- TODO add 'maximized' prop to q-dialog when on mobile or tablet -->

    <q-card class="panel-card">
      <panel-header :label="$t('labels.settings')" />
      <q-card-section>
        <q-list class="column">
          <q-item class="settings-item">
            <q-item-section class="settings-item-label">
              <q-icon name="language" size="30px" />
              <span>{{ $t('labels.language') }}</span>
            </q-item-section>

            <q-item-section>
              <locale-changer />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useDialogPluginComponent } from 'quasar';
import { PanelHeader } from 'src/widgets/panel-header';
import { LocaleChanger } from 'src/features/change-locale';

defineEmits([...useDialogPluginComponent.emits]);
</script>

<style lang="scss" scoped>
.settings-item {
  display: flex;
  align-items: center;
}

.settings-item-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start !important;
  gap: 15px;
}


</style>
