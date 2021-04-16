import { atom, selector } from 'recoil';
import { SignupDataInterface } from '../component/Signup/DataModel';
import { persistAtom } from './index';

export const IsLoginState = atom<boolean>({
    key: 'IsLoginState',
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const IsSplashIndex = atom<number>({
    key: 'IsSplashIndex',
    default: 0,
    effects_UNSTABLE: [persistAtom],
});

export const SignUpInfro = atom<SignupDataInterface>({
    key: 'SignUpInfro',
    default: {
        accNumber: '',
        cellNumber: '',
        nickName: '',
        realName: '',
    },
});

export const IsSplashSkipSelector = selector({
    key: 'IsSplashSkipSelector',
    get: ({ get }) => get(IsSplashIndex) === -1,
});
