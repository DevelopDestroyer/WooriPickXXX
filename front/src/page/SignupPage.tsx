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
import SignupCategoryComponent from '../component/Signup/SignupCategoryComponent';
import SignupProfileComponent from '../component/Signup/SignupProfileComponent';
import { SignUpProfileState } from '../recoil/Session';

const SignupPage: React.FC = () => {
    const history = useHistory();

    const restRecoil = useResetRecoilState(SignUpProfileState);
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

    const onMove = (index: number, move: number) => {
        if (index + move < 0) {
            restRecoil();
            history.replace('/mainpage');
            return;
        }

        if (index + move > 4) {
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
