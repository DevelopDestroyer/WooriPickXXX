import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { commonSlickSettings } from '../component/Common';
import {
    rendingData,
    SignupDataInterface,
    SignupProfileInterface,
} from '../component/Signup/DataModel';
import SignupAccountComponent from '../component/Signup/SignupAccountComponent';
import SignupProfileComponent from '../component/Signup/SignupProfileComponent';
import { SignUpInfro } from '../recoil/Session';

const parseData = (data: SignupDataInterface, index: number): string => {
    switch (index) {
        case 0:
            return data.realName;
        case 1:
            return data.nickName;
        case 2:
            return data.cellNumber;
        case 3:
            return data.accNumber;
    }
    return '';
};

const SignupPage: React.FC = () => {
    const history = useHistory();
    const [signupData, setSignupData] = useRecoilState(SignUpInfro);
    const restRecoil = useResetRecoilState(SignUpInfro);
    const sliderRef = useRef<Slider>(null);

    const onChange = (index: number, data: string) => {
        switch (index) {
            case 0:
                setSignupData({ ...signupData, realName: data });
                break;
            case 1:
                setSignupData({ ...signupData, nickName: data });
                break;
            case 2:
                setSignupData({ ...signupData, cellNumber: data });
                break;
            case 2:
                setSignupData({ ...signupData, accNumber: data });
                break;
        }
    };

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

    rendingData.forEach((eachData: SignupProfileInterface, index: number) => {
        items.push(
            <SignupProfileComponent
                key={index}
                data={eachData}
                defaultValue={parseData(signupData, index)}
                onMoveButtonClick={(move: number) => onMove(index, move)}
                onInpuChange={(data: string) => onChange(index, data)}
            />
        );
    });

    items.push(
        <SignupAccountComponent
            key={rendingData.length}
            defaultValue={parseData(signupData, rendingData.length)}
            onMoveButtonClick={(move: number) => {
                onMove(rendingData.length, move);
            }}
            onInpuChange={(data: string) => onChange(rendingData.length, data)}
        />
    );
    console.log(items);

    return (
        <Slider {...commonSlickSettings} ref={sliderRef}>
            {items}
        </Slider>
    );
};

export default SignupPage;
