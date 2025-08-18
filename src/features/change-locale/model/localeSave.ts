import { computed } from 'vue';
import { LocalStorage } from 'quasar';
import type { MessageLanguages } from 'src/boot/i18n';

export const useLocaleSave = () => {
  const savedLocale = computed<MessageLanguages>({
    get: () => {
      return (LocalStorage.getItem('locale') as MessageLanguages) || 'English';
    },

    set: (value: MessageLanguages) => {
      return LocalStorage.setItem('locale', value);
    },
  });

  return {
    savedLocale,
  };
};
