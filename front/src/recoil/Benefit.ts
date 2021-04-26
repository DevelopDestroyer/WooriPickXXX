import { atom } from 'recoil';
import {
    BenefitCompanyRes,
    BenefitFavoriteCompany,
} from '../component/Benefit/DataModel';
import { persistAtom } from './index';

export const BenefitStateCompany = atom<BenefitCompanyRes>({
    key: 'BenefitStateCompany',
    default: {
        isLoaded: false,
        data: [],
    },
    effects_UNSTABLE: [persistAtom],
});

export const BenefitFavoriteState = atom<BenefitFavoriteCompany>({
    key: 'BenefitFavoriteState',
    default: {},
    effects_UNSTABLE: [persistAtom],
});
