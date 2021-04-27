export interface FriendDataSet {
    name: string;
    displayname: string;
    cellphone: string;
}

export interface UsedFriendSet {
    name: string;
    nickname?: string;
    phoneNumber: string;
}

export interface TogetherAVGSet {
    ago3MonthBenefitPoint: number;
    aveRank: number;
    myRank: number;
    thisMonthBenefitPoint: number;
}

export const DUMMY_FRIEND_SET: FriendDataSet[] = [
    {
        cellphone: '010-3333-1234',
        displayname: '서진',
        name: '서진',
    },
    {
        cellphone: '010-1111-1234',
        displayname: '태호',
        name: '태호',
    },
    {
        cellphone: '010-2222-1234',
        displayname: '진영',
        name: '진영',
    },
    {
        cellphone: '010-4444-1234',
        displayname: '정민',
        name: '정민',
    },
];

export const DUMMY_NOT_UNUSEDSET: UsedFriendSet[] = [
    {
        phoneNumber: '123-4567-8901',
        nickname: '테스트1',
        name: '테스트1',
    },
    {
        phoneNumber: '123-3214-2412',
        nickname: '테스트2',
        name: '테스트2',
    },
    {
        phoneNumber: '123-3432-6642',
        nickname: '테스트3',
        name: '테스트3',
    },
    {
        phoneNumber: '123-1235-9757',
        nickname: '테스트4',
        name: '테스트4',
    },
    {
        phoneNumber: '123-7564-7454',
        nickname: '테스트4',
        name: '테스트4',
    },
    {
        phoneNumber: '123-5345-6643',
        nickname: '테스트5',
        name: '테스트5',
    },
    {
        phoneNumber: '123-1262-6345',
        nickname: '테스트6',
        name: '테스트6',
    },
    {
        phoneNumber: '123-7456-6654',
        nickname: '테스트7',
        name: '테스트7',
    },
];
