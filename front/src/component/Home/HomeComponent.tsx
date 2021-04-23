import { Box, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentUserState } from '../../recoil/Session';
import HeaderDeafault from '../Common/HeaderDefault';
import HCBenefit from './HCBenefit';
import HCPoint from './HCPoint';
import HCStatus from './HCStatus';

const useStyles = makeStyles(() => ({
    dfColor: {
        color: 'white',
    },
    buttonLayout: {
        backgroundColor: '#3BAAD8',
        flexBasis: 0,
        flexGrow: 1,
    },
}));

const HomeComponent: React.FC = () => {
    const classes = useStyles();
    const userInfo = useRecoilValue(CurrentUserState);
    console.log(userInfo);
    return (
        <>
            <HeaderDeafault icon={<HomeIcon />} title="홈" />
            <Box mx="1rem" overflow="hiddne">
                <Box>
                    <HCStatus />
                </Box>
                <Box mt="1rem">
                    <HCBenefit />
                </Box>
                <Box my="1rem">
                    <HCPoint />
                </Box>
            </Box>
        </>
    );
};

export default HomeComponent;
