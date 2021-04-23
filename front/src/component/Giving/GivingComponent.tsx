import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import http from '../../http';
import { GivingResultState } from '../../recoil/Session';
import Loading from '../Common/Loading';
import GivingCommon from './GivingCommon';
import GivingComponentDonationMember from './GivingComponentDonationMember';
import GivingComponentDonationPie from './GivingComponentDonationPie';
import GivingComponentStatus from './GivingComponentStatus';

const useStyles = makeStyles(() => ({
    moneyFont: {
        fontFamily: "'Recursive', sans-serif !important",
        fontSize: '36px',
        textAlign: 'center',
    },
    buttonLayout: {
        backgroundColor: '#3BAAD8',
        flexBasis: 0,
        flexGrow: 1,
    },
}));

const GivingComponent: React.FC = () => {
    const classes = useStyles();
    const [givingData, setGivingData] = useRecoilState(GivingResultState);

    useEffect(() => {
        http.get('/api/trading/donation/statistics').then((res) => {
            setGivingData({
                isLoaded: true,
                ...res.data.data,
            });
        });
    }, []);
    console.log(givingData);

    return (
        <GivingCommon
            header={{
                isLast: false,
                headerTitle: '기부하기',
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
                    <Box mt="1rem">
                        <GivingComponentDonationMember
                            donationStatus={givingData.donationRatioStatus}
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
