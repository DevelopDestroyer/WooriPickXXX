export enum SIGNUP_TYPE {
    PROFILE,
    ACCOUNT,
    ADD_CATEGORY,
    BILL_INFO,
    PASSWORD,
}

export interface SignupAccountInterface {
    ACCT_KND: string;
    ACNO: string;
    ACT_STCD: string;
    ADNT_RGS_YN: string;
    CUCD: string;
    FAXC_BAL: string;
    NEW_DT: string;
    PBOK_BAL: string;
    PRD_NM: string;
    PSKL_ACT_YN: string;
    XPR_DT: string;
}

export interface SignupProfileInterface {
    title: string;
    description: string;
}

export interface SignupComponentProps {
    checkCurrent?: boolean;
    onMoveButtonClick: (move: number) => void;
}

export interface SignupProfileInfo {
    realName: string;
    nickName: string;
    cellNumber: string;
}

export const rendingData: Array<SignupProfileInterface> = [
    {
        title: '이름을 알려주세요.',
        description: '이름',
    },
    {
        title: '닉네임을 정해주세요.',
        description: '닉네임',
    },
];
