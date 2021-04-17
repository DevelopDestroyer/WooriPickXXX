import { atom } from 'recoil';
import { SignupDataInterface } from '../component/Signup/DataModel';
import { persistAtom } from './index';

export const IsLoginState = atom<boolean>({
    key: 'IsLoginState',
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const IsSplashSkip = atom<boolean>({
    key: 'IsSplashSkip',
    default: false,
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
