import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import http from '../../http';
import { SignUpProfileState } from '../../recoil/Session';
import {
    SignupComponentProps,
    SignupProfileInfo,
    SignupProfileInterface,
} from './DataModel';
import SignupCommonComponent from './SignupCommon';

type SignupProfileProps = SignupComponentProps & {
    data: SignupProfileInterface;
    index: number;
};

const parseData = (data: SignupProfileInfo, index: number): string => {
    switch (index) {
        case 0:
            return data.realName;
        case 1:
            return data.nickName;
        case 2:
            return data.cellNumber;
    }
    return '';
};

const SignupProfileComponent: React.FC<SignupProfileProps> = (
    props: SignupProfileProps
) => {
    const [profile, setProfile] = useRecoilState(SignUpProfileState);
    const value = parseData(profile, props.index);
    const buttonDisable = value === '';
    const [inValid, setInValid] = useState<boolean>(false);

    const onChange = (index: number, data: string) => {
        switch (index) {
            case 0:
                setProfile({ ...profile, realName: data });
                break;
            case 1:
                console.log(`Onchange Called`);
                setProfile({ ...profile, nickName: data });
                http.get(`/api/members/nicknameCheck/${data}`).then((res) => {
                    const alreadyExist: boolean = res.data.data;
                    if (alreadyExist !== inValid) {
                        setInValid(alreadyExist);
                    }
                });
                break;
            case 2:
                setProfile({ ...profile, cellNumber: data });
                break;
        }
    };

    return (
        <div className="bg_gray5">
            <SignupCommonComponent
                buttonDisable={buttonDisable || inValid}
                onMoveButtonClick={props.onMoveButtonClick}
            >
                <p className="txt_20 txt_b">{props.data.title}</p>
                <div className="box_div mg_t20 bg_wh">
                    <div className="pd_t16 mg_l16"></div>
                    <div className="pd_t4 mg_l16 pd_b16">
                        <TextField
                            error={inValid}
                            helperText={
                                inValid && '이미 존재하는 닉네임입니다.'
                            }
                            value={value}
                            onChange={(event) => {
                                onChange(props.index, event.target.value);
                            }}
                            label={props.data.description}
                            variant="outlined"
                        />
                    </div>
                </div>
            </SignupCommonComponent>
        </div>
    );
};

export default SignupProfileComponent;
