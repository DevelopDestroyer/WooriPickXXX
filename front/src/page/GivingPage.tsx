import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import { useResetRecoilState } from 'recoil';
import { commonSlickSettings } from '../component/Common';
import GivingAmountComponent from '../component/Giving/GivingAmountComponent';
import GivingComponent from '../component/Giving/GivingComponent';
import GivingExplanComponent from '../component/Giving/GivingExplanComponent';
import GivingFinishComponent from '../component/Giving/GivingFinishComponent';
import GivingSelectComponent from '../component/Giving/GivingSelectComponent';
import { GivingAmountState, GivingSelectState } from '../recoil/Giving';

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

        if (nextMove > 4) {
            history.replace('/homepage');
        } else {
            sliderRef.current && sliderRef.current.slickGoTo(nextMove);
        }
    };

    return (
        <div className="bg_gray5">
            <Slider {...commonSlickSettings} ref={sliderRef}>
                <GivingComponent index={0} onMoveClick={onNextMove} />
                <GivingExplanComponent index={1} onMoveClick={onNextMove} />
                <GivingSelectComponent index={2} onMoveClick={onNextMove} />
                <GivingAmountComponent index={3} onMoveClick={onNextMove} />
                <GivingFinishComponent index={4} onMoveClick={onNextMove} />
            </Slider>
        </div>
    );
};

export default GivingPage;
