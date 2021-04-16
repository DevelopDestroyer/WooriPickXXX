import { atom, selector } from 'recoil';
import { persistAtom } from './index';

export const IsLoginState = atom({
    key: 'IsLoginState',
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const IsSplashIndex = atom({
    key: 'IsSplashIndex',
    default: 0,
    effects_UNSTABLE: [persistAtom],
});

export const IsSplashSkipSelector = selector({
    key: 'IsSplashSkipSelector',
    get: ({ get }) => get(IsSplashIndex) === -1,
});
