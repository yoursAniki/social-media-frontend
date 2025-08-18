import { ref, watch } from 'vue';
import { LocalStorage } from 'quasar';
import type { MessageLanguages } from 'src/boot/i18n';

export const useLocaleSave = () => {
  const savedLocale = ref<MessageLanguages>(
    (LocalStorage.getItem('locale') as MessageLanguages) || 'English',
  );

  watch(savedLocale, (value: MessageLanguages) => {
    LocalStorage.set('locale', value);
  });

  return {
    savedLocale,
  };
};
