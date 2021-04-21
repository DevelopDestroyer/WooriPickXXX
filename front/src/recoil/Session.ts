import { atom } from 'recoil';
import { CategoryDataSet } from '../component/Category/DataModel';
import { SignupProfileInfo } from '../component/Signup/DataModel';
import { persistAtom } from './index';

export interface UserInfo {
    name: string;
    nickname: string;
    phoneNumber: string;
    accountNumber: string;
    accountMoney: number;
    point: number;
}

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

export const SignUpCategoryState = atom<CategoryDataSet[]>({
    key: 'SignUpCategoryState',
    default: [],
});

export const CurrentUserState = atom<UserInfo>({
    key: 'CurrentUserState',
    default: {
        name: '',
        nickname: '',
        phoneNumber: '',
        point: 0,
        accountMoney: 0,
        accountNumber: '',
    },
    effects_UNSTABLE: [persistAtom],
});
