import { atom } from 'recoil';
import { SignupProfileInfo } from '../component/Signup/DataModel';
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

export const SignUpProfileState = atom<SignupProfileInfo>({
    key: 'SignUpProfileState',
    default: {
        cellNumber: '',
        nickName: '',
        realName: '',
    },
});

export const SignUpAccNumState = atom<string>({
    key: 'SignUpAccNumState',
    default: '',
});
