import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { rendingData as MainRendingData } from '../component/Rending/DataModel';
import RendingPage from '../component/Rending/RendingComponent';
import { IsSplashIndex, IsSplashSkipSelector } from '../recoil/Session';
import SigninPage from './SigninPage';

const MainPage: React.FC = () => {
    const [splashIndex, setSplashIndex] = useRecoilState(IsSplashIndex);
    const isSplashSkip = useRecoilValue(IsSplashSkipSelector);

    const onMoveButtonClick = (index: number, move: number) => {
        if (index + move >= MainRendingData.length) {
            setSplashIndex(-1);
        } else if (index + move === -1) {
            return;
        } else {
            setSplashIndex(index + move);
        }
    };

    return (
        <>
            {isSplashSkip ? (
                <SigninPage />
            ) : (
                <RendingPage
                    index={splashIndex}
                    onMoveButtonClick={onMoveButtonClick}
                />
            )}
        </>
    );
};

export default MainPage;
