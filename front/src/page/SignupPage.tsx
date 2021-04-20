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
import SignupBillingComponent from '../component/Signup/SignupBillingComponent';
import SignupCategoryComponent from '../component/Signup/SignupCategoryComponent';
import SignupFinishComponent from '../component/Signup/SignupFinishComponent';
import SignupPasswordComponent from '../component/Signup/SignupPasswordComponent';
import SignupProfileComponent from '../component/Signup/SignupProfileComponent';
import {
    SignUpAccNumState,
    SignUpCategoryState,
    SignUpProfileState,
} from '../recoil/Session';

const SignupPage: React.FC = () => {
    const history = useHistory();

    const resetProfile = useResetRecoilState(SignUpProfileState);
    const resetAccNum = useResetRecoilState(SignUpAccNumState);
    const resetCategory = useResetRecoilState(SignUpCategoryState);
    const sliderRef = useRef<Slider>(null);

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

    items.push(
        <SignupAccountComponent
            key={3}
            onMoveButtonClick={(move: number) => {
                onMove(3, move);
            }}
        />
    );
    items.push(
        <SignupCategoryComponent
            key={4}
            onMoveButtonClick={(move: number) => {
                onMove(4, move);
            }}
        />
    );
    items.push(
        <SignupBillingComponent
            key={5}
            onMoveButtonClick={(move: number) => {
                onMove(5, move);
            }}
        />
    );

    items.push(
        <SignupPasswordComponent
            key={6}
            onMoveButtonClick={(move: number) => {
                onMove(6, move);
            }}
        />
    );

    items.push(
        <SignupFinishComponent
            key={7}
            onMoveButtonClick={(move: number) => {
                onMove(7, move);
            }}
        />
    );

    const onMove = (index: number, move: number) => {
        if (index + move < 0) {
            resetProfile();
            resetAccNum();
            resetCategory();
            history.replace('/mainpage');
            return;
        }

        if (index + move > 7) {
            // 맨마지막 페이지
            // setIsAccSeq(true); real Signup
            console.log(`last page`);
        } else {
            console.log(`goto slide ${index + move}`);
            sliderRef.current && sliderRef.current.slickGoTo(index + move);
        }
    };
    console.log(items);
    return (
        <Slider {...commonSlickSettings} ref={sliderRef}>
            {items}
        </Slider>
    );
};

export default SignupPage;
