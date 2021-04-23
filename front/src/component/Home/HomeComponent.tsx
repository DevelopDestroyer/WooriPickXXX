import { Box } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import HeaderDeafault from '../Common/HeaderDefault';
import HCBenefit from './HCBenefit';
import HCPoint from './HCPoint';
import HCStatus from './HCStatus';

const HomeComponent: React.FC = () => {
    return (
        <>
            <HeaderDeafault icon={<HomeIcon />} title="홈" />
            <Box mx="1rem" overflow="hiddne">
                <Box mt="1rem">
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
