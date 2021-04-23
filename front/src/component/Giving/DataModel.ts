import { CategoryDataInfo } from '../Common/SelectList';

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
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(246,219,111,0.2)',
    'rgb(168,109,103)',
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
