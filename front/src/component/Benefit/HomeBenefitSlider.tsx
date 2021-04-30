import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useRecoilValue } from 'recoil';
import { BenefitSlideNumber } from '../../recoil/Benefit';
import { CategoryStandInfo } from '../Category/DataModel';
import { commonSlickSettings } from '../Common';
import HomeBenefitList from './HomeBenefitList';

interface TabPanelProps {
    children?: React.ReactNode;
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
            <Box style={{ backgroundColor: '#F1F4F7' }} p={3}>
                {children}
            </Box>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: 'rgb(250, 251, 252)',
    },
}));

const HomeBenefitSlider: React.FC = () => {
    const classes = useStyles();
    const page = useRecoilValue(BenefitSlideNumber);
    const sliderRef = useRef<Slider>(null);
    sliderRef.current && sliderRef.current.slickGoTo(page);
    const override = commonSlickSettings;
    override.speed = 100;

    return (
        <div className={classes.root}>
            <Slider {...override} ref={sliderRef}>
                {CategoryStandInfo.map((eachData, index) => {
                    return (
                        <TabPanel key={page} value={page} index={index}>
                            <HomeBenefitList categoryId={eachData.id} />
                        </TabPanel>
                    );
                })}
            </Slider>
        </div>
    );
};

export default HomeBenefitSlider;
