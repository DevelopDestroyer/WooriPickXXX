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

export interface GivingDataSet {
    id: number;
    name: string;
}

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
