import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import { useResetRecoilState } from 'recoil';
import { commonSlickSettings } from '../component/Common';
import {
    rendingData,
    SignupProfileInterface,
} from '../component/Signup/DataModel';
import SignupAccountComponent from '../component/Signup/SignupAccountComponent';
import SignupProfileComponent from '../component/Signup/SignupProfileComponent';
import { SignUpProfileState } from '../recoil/Session';

const SignupPage: React.FC = () => {
    const history = useHistory();

    const restRecoil = useResetRecoilState(SignUpProfileState);
    const sliderRef = useRef<Slider>(null);

    const onMove = (index: number, move: number) => {
        if (index + move < 0) {
            restRecoil();
            history.replace('/mainpage');
            return;
        }

        if (index + move > rendingData.length) {
            // 맨마지막 페이지
            // setIsAccSeq(true); real Signup
        } else {
            sliderRef.current && sliderRef.current.slickGoTo(index + move);
        }
    };

    const items: Array<JSX.Element> = [];
    let totalIndex = 0;
    rendingData.forEach((eachData: SignupProfileInterface, index: number) => {
        items.push(
            <SignupProfileComponent
                key={eachData.title}
                index={index}
                data={eachData}
                onMoveButtonClick={(move: number) => onMove(index, move)}
            />
        );
        totalIndex++;
    });

    items.push(
        <SignupAccountComponent
            key={rendingData.length}
            onMoveButtonClick={(move: number) => {
                onMove(rendingData.length, move);
            }}
        />
    );
    totalIndex++;

    return (
        <Slider {...commonSlickSettings} ref={sliderRef}>
            {items}
        </Slider>
    );
};

export default SignupPage;
