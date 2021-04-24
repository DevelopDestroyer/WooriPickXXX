import { atom } from 'recoil';
import { CategoryDataSet } from '../component/Category/DataModel';
import { TransactionSet } from '../component/Home/DataModel';
import { SignupProfileInfo } from '../component/Signup/DataModel';
import { persistAtom } from './index';

export interface UserInfo {
    name: string;
    nickname: string;
    phoneNumber: string;
    accountNumber: string;
}

export interface UserAccount {
    accountMoney: number;
    point: number;
}

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

export const SignUpAccInfoState = atom<{
    accountNumber: string;
    accountMoney: number;
}>({
    key: 'SignUpAccInfoState',
    default: {
        accountMoney: 0,
        accountNumber: '',
    },
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
        accountNumber: '',
    },
    effects_UNSTABLE: [persistAtom],
});

export const CurrentAccountState = atom<UserAccount>({
    key: 'CurrentAccountState',
    default: {
        point: 0,
        accountMoney: 0,
    },
    effects_UNSTABLE: [persistAtom],
});

export const CurrentUserCategoryState = atom<number[]>({
    key: 'CurrentUserCategoryState',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const CurrentUserTransactionState = atom<TransactionSet[]>({
    key: 'CurrentUserTransactionState',
    default: [],
    effects_UNSTABLE: [persistAtom],
});
