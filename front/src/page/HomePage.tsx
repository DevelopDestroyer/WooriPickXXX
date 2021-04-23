import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import BenefitComponent from '../component/Benefit/BenefitComponent';
import BottomBarNav, { DISPLAY_TYPE } from '../component/Common/BottomBar';
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

const HomePage: React.FC = () => {
    const [renderType, setCurrentRenderType] = useState<DISPLAY_TYPE>(
        DISPLAY_TYPE.HOME
    );

    const onChange = (type: DISPLAY_TYPE) => {
        setCurrentRenderType(type);
    };

    return (
        <div className="bg_gray5">
            <Box className="glow_body" overflow="hidden">
                {homeRendering(renderType)}
            </Box>
            <BottomBarNav current={renderType} onChange={onChange} />
        </div>
    );
};

export default HomePage;
