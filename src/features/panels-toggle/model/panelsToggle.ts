import { Dialog } from 'quasar';
import { ProfilePanel } from 'src/widgets/profile-panel';

export const openProfilePanel = () => {
  Dialog.create({
    component: ProfilePanel,
  });
};
