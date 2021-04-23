import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import { useResetRecoilState } from 'recoil';
import BenefitComponent from '../component/Benefit/BenefitComponent';
import { commonSlickSettings } from '../component/Common';
import { DISPLAY_TYPE } from '../component/Common/BottomBar';
import GivingAmountComponent from '../component/Giving/GivingAmountComponent';
import GivingComponent from '../component/Giving/GivingComponent';
import GivingFinishComponent from '../component/Giving/GivingFinishComponent';
import GivingSelectComponent from '../component/Giving/GivingSelectComponent';
import HomeComponent from '../component/Home/HomeComponent';
import SettingComponent from '../component/Setting/SettingComponent';
import TogetherComponent from '../component/Together/TogetherComponent';
import { GivingAmountState, GivingSelectState } from '../recoil/Giving';
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
    const history = useHistory();
    const resetSelect = useResetRecoilState(GivingSelectState);
    const resetAmount = useResetRecoilState(GivingAmountState);

    const onNextMove = (nextMove: number) => {
        if (nextMove < 0) {
            resetSelect();
            resetAmount();
            history.goBack();
            return;
        }

        if (nextMove > 3) {
            resetSelect();
            resetAmount();
            history.replace('/');
        } else {
            sliderRef.current && sliderRef.current.slickGoTo(nextMove);
        }
    };

    return (
        <div className="bg_gray5">
            <Slider {...commonSlickSettings} ref={sliderRef}>
                <GivingComponent index={0} onMoveClick={onNextMove} />
                <GivingSelectComponent index={1} onMoveClick={onNextMove} />
                <GivingAmountComponent index={2} onMoveClick={onNextMove} />
                <GivingFinishComponent index={3} onMoveClick={onNextMove} />
            </Slider>
        </div>
    );
};

export default GivingPage;
