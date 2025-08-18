<template>
  <q-dialog transition-show="slide-left" transition-hide="slide-right">
    <!-- TODO add 'maximized' prop to q-dialog when on mobile or tablet -->

    <q-card class="panel-card">
      <panel-header :label="$t('labels.settings')" />
      <q-card-section>
        <q-list class="column">
          <q-item class="settings-item">
            <q-item-section>{{ $t('labels.language') }}</q-item-section>

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
</style>
