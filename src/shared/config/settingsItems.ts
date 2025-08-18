import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export const useSettingsItems = () => {
  const { t } = useI18n();

  const settingsItems = computed(() => {
    return [
      {
        label: t('labels.language'),
        icon: 'language',
        
        action: 'language',
      },
    ];
  });
};
