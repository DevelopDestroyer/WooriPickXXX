import { atom } from 'recoil';
import {
    FriendDataSet,
    TogetherAVGSet,
    UsedFriendSet,
} from '../component/Together/DataModel';
import { persistAtom } from './index';

export const FriendDataSetState = atom<FriendDataSet[]>({
    key: 'FriendDataSetState',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const TogetherAVGState = atom<TogetherAVGSet>({
    key: 'TogetherAVGState',
    default: {
        aveRank: -1,
        ago3MonthBenefitPoint: -1,
        myRank: -1,
        thisMonthBenefitPoint: -1,
    },
});

export const UsedFriendState = atom<UsedFriendSet[]>({
    key: 'UsedFriendState',
    default: [],
});

export const UnUsedFriendState = atom<UsedFriendSet[]>({
    key: 'UnUsedFriendState',
    default: [],
});
