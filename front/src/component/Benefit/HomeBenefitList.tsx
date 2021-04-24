import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import HomBenefitCompany from './HomBenefitCompany';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: '1500px',
    },
}));

export interface HomeBenefitListProps {
    categoryId: number;
}

const HomeBenefitList: React.FC<HomeBenefitListProps> = (
    props: HomeBenefitListProps
) => {
    const classes = useStyles();

    return (
        <>
            <HomBenefitCompany
                companyName="111"
                categoryId={1}
                description={'1'}
                thumbNailPath={'111'}
                totalLike={11}
                userLike={false}
            />
        </>
    );
};

export default HomeBenefitList;
