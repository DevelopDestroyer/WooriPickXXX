import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
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
            <Box p={3}>{children}</Box>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: 'rgb(250, 251, 252)',
    },
}));

export interface HomeBenefitSliderProps {
    pageIndex: number;
}

const HomeBenefitSlider: React.FC<HomeBenefitSliderProps> = (
    props: HomeBenefitSliderProps
) => {
    const classes = useStyles();

    useEffect(() => {
        sliderRef.current && sliderRef.current.slickGoTo(props.pageIndex);
    }, [props.pageIndex]);

    const sliderRef = useRef<Slider>(null);
    const override = commonSlickSettings;
    override.speed = 100;

    return (
        <div className={classes.root}>
            <Slider {...override} ref={sliderRef}>
                {CategoryStandInfo.map((eachData, index) => {
                    return (
                        <TabPanel
                            key={props.pageIndex}
                            value={props.pageIndex}
                            index={index}
                        >
                            <HomeBenefitList categoryId={eachData.id} />
                        </TabPanel>
                    );
                })}
            </Slider>
        </div>
    );
};

export default HomeBenefitSlider;
