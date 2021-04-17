export interface SignupProfileInterface {
    title: string;
    description: string;
}

export interface SignupComponentProps {
    defaultValue: string;
    onMoveButtonClick: (move: number) => void;
    onInpuChange: (data: string) => void;
}

export interface SignupDataInterface {
    realName: string;
    nickName: string;
    cellNumber: string;
    accNumber: string;
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
    {
        title: '휴대폰번호를 입력하세요.',
        description: '휴대폰번호',
    },
];
