import React, { useRef } from 'react';
import Slider from 'react-slick';
import BenefitComponent from '../component/Benefit/BenefitComponent';
import { commonSlickSettings } from '../component/Common';
import { DISPLAY_TYPE } from '../component/Common/BottomBar';
import GivingComponent from '../component/Giving/GivingComponent';
import HomeComponent from '../component/Home/HomeComponent';
import SettingComponent from '../component/Setting/SettingComponent';
import TogetherComponent from '../component/Together/TogetherComponent';
const homeRendering = (type: DISPLAY_TYPE) => {
    switch (type) {
        case DISPLAY_TYPE.HOME:
            return <HomeComponent />;
        case DISPLAY_TYPE.BENEFIT:
            return <BenefitComponent />;
        case DISPLAY_TYPE.TOGETHER:
            return <TogetherComponent />;
        case DISPLAY_TYPE.SETTING:
            return <SettingComponent />;
        default:
            return <></>;
    }
};

const GivingPage: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    return (
        <div className="bg_gray5">
            <Slider {...commonSlickSettings} ref={sliderRef}>
                <GivingComponent />
            </Slider>
        </div>
    );
};

export default GivingPage;
