import { atom } from 'recoil';
import { GivingDataSet, GivingResultInfo } from '../component/Giving/DataModel';
import { persistAtom } from './index';

export const GivingSelectState = atom<GivingDataSet[]>({
    key: 'GivingSelectState',
    default: [],
});

export const GivingAmountState = atom<number>({
    key: 'GivingAmountState',
    default: 0,
});

export const GivingResultState = atom<GivingResultInfo>({
    key: 'GivingResultState',
    default: {
        isLoaded: false,
        donationRatioStatus: [],
        memberDTOs: [],
        totalDonationMoney: 0,
    },
    effects_UNSTABLE: [persistAtom],
});