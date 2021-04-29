import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useRecoilState } from 'recoil';
import { commonSlickSettings } from '../component/Common';
import {
    rendingData as MainRendingData,
    rendingData,
} from '../component/Rending/DataModel';
import RendingPage from '../component/Rending/RendingComponent';
import { IsSplashSkip } from '../recoil/Session';
import SigninPage from './SigninPage';

const MainPage: React.FC = () => {
    const [isSplashSkip, setIsSplashSkip] = useRecoilState(IsSplashSkip);

    const sliderRef = useRef<Slider>(null);

    const onMoveButtonClick = (index: number, move: number) => {
        if (index + move >= MainRendingData.length) {
            setIsSplashSkip(true);
        } else if (index + move === -1) {
            return;
        } else {
            sliderRef.current && sliderRef.current.slickGoTo(index + move);
        }
    };

    return (
        <>
            {isSplashSkip ? (
                <SigninPage />
            ) : (
                <Slider {...commonSlickSettings} ref={sliderRef}>
                    {rendingData.map((eachData, index, arr) => {
                        return (
                            <RendingPage
                                key={eachData.title.first}
                                data={eachData}
                                isFirst={index === 0}
                                isLast={arr.length - 1 === index}
                                onMoveButtonClick={(move) =>
                                    onMoveButtonClick(index, move)
                                }
                            />
                        );
                    })}
                </Slider>
            )}
        </>
    );
};

export default MainPage;
