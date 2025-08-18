import { Dialog } from 'quasar';
import { ProfilePanel } from 'src/widgets/profile-panel';
import { SettingsPanel } from 'src/widgets/settings-panel';

export const usePanelsToggle = () => {
  const openProfilePanel = () => {
    Dialog.create({
      component: ProfilePanel,
    });
  };

  const openSettingsPanel = () => {
    Dialog.create({
      component: SettingsPanel,
    });
  };

  return {
    openProfilePanel,
    openSettingsPanel,
  };
};
