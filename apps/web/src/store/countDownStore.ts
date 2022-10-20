import { atom } from 'recoil';

export const countState = atom<number>({
  key: 'countState',
  default: 0,
});
