import { atom } from 'recoil';
import {
    BenefitCompanyRes,
    BenefitFavoriteCompany,
} from '../component/Benefit/DataModel';

export const BenefitStateCompany = atom<BenefitCompanyRes>({
    key: 'BenefitStateCompany',
    default: {
        isLoaded: false,
        data: [],
    },
});

export const BenefitFavoriteState = atom<BenefitFavoriteCompany>({
    key: 'BenefitFavoriteState',
    default: {},
});
