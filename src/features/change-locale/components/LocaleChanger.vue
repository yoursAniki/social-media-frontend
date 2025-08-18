<template>
  <q-select
    @update:model-value="saveLocale($event)"
    filled
    :name="$t('labels.language')"
    v-model="$i18n.locale"
    :options="$i18n.availableLocales"
  />
</template>

<script lang="ts" setup>
import { useLocaleSave } from '../model/localeSave';
import type { MessageLanguages } from 'src/boot/i18n';

const { savedLocale } = useLocaleSave();

const saveLocale = (locale: MessageLanguages) => {
  savedLocale.value = locale;
};
</script>

<style></style>
