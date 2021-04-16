import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
    rendingData,
    SignupDataInterface,
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

const SignupPage: React.FC = (props) => {
    const history = useHistory();
    const [signupData, setSignupData] = useRecoilState(SignUpInfro);
    const restRecoil = useResetRecoilState(SignUpInfro);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAccSeq, setIsAccSeq] = useState<boolean>(false);

    const inputText = parseData(signupData, currentIndex);

    const onChange = (index: number, data: string) => {
        if (isAccSeq) {
            setSignupData({ ...signupData, accNumber: data });
        } else {
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
            }
        }
    };

    const accMoveBack = () => {
        setIsAccSeq(false);
    };

    const accMoveNext = () => {
        // signupSeq
        // setIsAccSeq(false);
        // setCurrentIndex(rendingData.length - 1);
    };

    const profileMove = (index: number, move: number) => {
        if (index + move < 0) {
            restRecoil();
            history.replace('/mainpage');
            return;
        }

        if (index + move >= rendingData.length) {
            setIsAccSeq(true);
        } else {
            setCurrentIndex(index + move);
        }
    };

    return (
        <>
            {isAccSeq ? (
                <SignupAccountComponent
                    onBackClick={accMoveBack}
                    onNextClick={accMoveNext}
                />
            ) : (
                <SignupProfileComponent
                    defaultValue={inputText}
                    index={currentIndex}
                    onMoveButtonClick={profileMove}
                    onInpuChange={onChange}
                />
            )}
        </>
    );
};

export default SignupPage;
