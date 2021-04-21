import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import BottomBarNav, { DISPLAY_TYPE } from '../component/Home/BottomBar';

const homeRendering = (type: DISPLAY_TYPE) => {
    switch (type) {
        case DISPLAY_TYPE.HOME:
            return (
                <>
                    <p>thisis home</p>
                </>
            );
        case DISPLAY_TYPE.BENEFIT:
            return (
                <>
                    <p>thisis benefit</p>
                </>
            );
        case DISPLAY_TYPE.TOGETHER:
            return (
                <>
                    <p>thisis together</p>
                </>
            );
        case DISPLAY_TYPE.SETTING:
            return (
                <>
                    <p>thisis setting</p>
                </>
            );
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
    console.log(`Render`);
    return (
        <div className="bg_gray5">
            <Box className="glow_body">{homeRendering(renderType)}</Box>
            <BottomBarNav current={renderType} onChange={onChange} />
        </div>
    );
};

export default HomePage;
