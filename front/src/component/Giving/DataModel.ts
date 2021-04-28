import { CategoryDataInfo } from '../Common/SelectList';

export interface ChainAPIRes {
    hash: string;
    previousHash: string;
    data: string;
    timeStamp: number;
    nonce: number;
    target: string;
    targetDepth: number;
}

// export type DONATION_TARGET = 201 | 202 | 203 | 204 | 205;
export interface BlockChainTotalSet {
    [givingTarget: number]: BlockChainDataSet[];
}

export interface BlockChainDataSet {
    name: string;
    timeString: string;
    givingTarget: string;
    donationAmount: number;
    hash: string;
    nonce: number;
    previousHash: string;
    target: string;
    targetDepth: number;
    timeStamp: number;
}

export interface DonationCategory {
    donationId: number;
    totalDonationCount: number;
}

export interface DonationMember {
    nickname: string;
    point: number;
}

export interface GivingResultInfo {
    isLoaded: boolean;
    totalDonationMoney: number;
    donationRatioStatus: DonationCategory[];
    memberDTOs: DonationMember[];
}

export interface GivingDataSet extends CategoryDataInfo {}

export const COLOR_SET = [
    '#3BAAD8',
    '#62BBE0',
    '#9DD4EC',
    '#C4E5F7',
    '#D8EEF7',
];

export const GivingStandInfo: GivingDataSet[] = [
    {
        id: 201,
        name: '친환경',
    },
    {
        id: 202,
        name: '동물보호',
    },
    {
        id: 203,
        name: '아동 / 노인',
    },
    {
        id: 204,
        name: '장애인',
    },
    {
        id: 205,
        name: '구호물품',
    },
];

export interface CommonInterface {
    onMoveClick: (nextMove: number) => void;
    index: number;
}
