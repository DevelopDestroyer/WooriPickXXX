import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import http from '../../http';
import { GivingResultState } from '../../recoil/Giving';
import Loading from '../Common/Loading';
import { CommonInterface } from './DataModel';
import GivingCommon from './GivingCommon';
import GivingComponentDonationMember from './GivingComponentDonationMember';
import GivingComponentDonationPie from './GivingComponentDonationPie';
import GivingComponentStatus from './GivingComponentStatus';

const GivingComponent: React.FC<CommonInterface> = ({
    index,
    onMoveClick,
}: CommonInterface) => {
    const [givingData, setGivingData] = useRecoilState(GivingResultState);

    useEffect(() => {
        http.get('/api/trading/donation/statistics').then((res) => {
            setGivingData({
                isLoaded: true,
                ...res.data.data,
            });
        });
    }, []);

    return (
        <GivingCommon
            headerTitle="기부하기"
            isLast={false}
            onMoveClick={(nextMove: number) => {
                onMoveClick(index + nextMove);
            }}
            buttonTitle="기부 동참하기"
        >
            {givingData.isLoaded ? (
                <>
                    <Box mt="1rem">
                        <GivingComponentStatus
                            money={givingData.totalDonationMoney}
                        />
                    </Box>
                    <Box mt="1rem">
                        <GivingComponentDonationPie
                            donationStatus={givingData.donationRatioStatus}
                        />
                    </Box>
                    <Box my="1rem">
                        <GivingComponentDonationMember
                            donationMember={givingData.memberDTOs}
                        />
                    </Box>
                </>
            ) : (
                <Loading />
            )}
        </GivingCommon>
    );
};

export default GivingComponent;
