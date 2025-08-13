import { Notify } from 'quasar';

export const errorNotify = (message: string) => {
  Notify.create({
    color: 'red',
    textColor: 'white',
    position: 'top',
    message,
  });
};

export const successNotify = (message: string) => {
  Notify.create({
    color: 'green',
    textColor: 'white',
    position: 'top',
    message,
  });
};
