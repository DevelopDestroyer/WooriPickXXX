import { atom, selector } from 'recoil';
import { persistAtom } from './index';

export const IsLoginState = atom({
  key: 'IsLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const IsSplashState = atom({
  key: 'IsSplashState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const IsLoginSelector = selector({
  key: 'IsLoginSelector',
  get: ({ get }) => get(IsLoginState),
});
