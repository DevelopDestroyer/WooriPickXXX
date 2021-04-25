import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import { useResetRecoilState } from 'recoil';
import { commonSlickSettings } from '../component/Common';
import {
    rendingData,
    SignupProfileInterface,
} from '../component/Signup/DataModel';
import SignupAccountComponent from '../component/Signup/SignupAccountComponent';
import SignupPasswordComponent from '../component/Signup/SignupPasswordComponent';
import SignupProfileComponent from '../component/Signup/SignupProfileComponent';
import {
    SignUpAccInfoState,
    SignUpCategoryState,
    SignUpProfileState,
} from '../recoil/Session';

const SignupPage: React.FC = () => {
    const history = useHistory();

    const resetProfile = useResetRecoilState(SignUpProfileState);
    const resetAccInfo = useResetRecoilState(SignUpAccInfoState);
    const resetCategory = useResetRecoilState(SignUpCategoryState);
    const sliderRef = useRef<Slider>(null);
    const [index, setIndex] = useState<number>(0);

    const items: Array<JSX.Element> = [];
    rendingData.forEach((eachData: SignupProfileInterface, index: number) => {
        items.push(
            <SignupProfileComponent
                key={index}
                index={index}
                data={eachData}
                onMoveButtonClick={(move: number) => onMove(index, move)}
            />
        );
    });

    const onMove = async (index: number, move: number) => {
        if (index + move < 0) {
            resetProfile();
            resetAccInfo();
            resetCategory();
            history.replace('/mainpage');
            setIndex(0);
            return;
        }
        setIndex(index + move);
        if (index + move > 4) {
            // 맨마지막 페이지
            // setIsAccSeq(true); real Signup
            history.replace('/category');
        } else {
            sliderRef.current && sliderRef.current.slickGoTo(index + move);
        }
    };

    return (
        <Slider {...commonSlickSettings} ref={sliderRef}>
            {items}
            <SignupAccountComponent
                key={3}
                checkCurrent={index === 3}
                onMoveButtonClick={(move: number) => {
                    onMove(3, move);
                }}
            />
            <SignupPasswordComponent
                key={4}
                onMoveButtonClick={(move: number) => {
                    onMove(4, move);
                }}
            />
        </Slider>
    );
};

export default SignupPage;
