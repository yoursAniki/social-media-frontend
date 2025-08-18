<template>
  <q-card-actions class="panel-header" align="between">
    <div>{{ label }}</div>
    <div>
      <q-btn v-if="editMode" icon="edit" flat padding="4px" size="15px" />
      <q-btn icon="close" flat padding="4px" size="15px" v-close-popup />
    </div>
  </q-card-actions>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  editMode: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.panel-header {
  font-size: 22px;
  font-weight: 500;
}
</style>
