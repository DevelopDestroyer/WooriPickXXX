import { Button, IconButton, TextField } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import http from '../../http';
import { SignUpProfileState } from '../../recoil/Session';
import {
    SignupComponentProps,
    SignupProfileInfo,
    SignupProfileInterface,
} from './DataModel';

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
            <div className="toptitle_div bg_wh">
                <div className="container">
                    <IconButton
                        className="back_div"
                        onClick={() => props.onMoveButtonClick(-1)}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                    <p className="txt_24 txt_b mg_t10">혜택통 만들기</p>
                </div>
            </div>

            <div className="container mg_t30 glow_body">
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
            </div>

            <Button
                disabled={buttonDisable || inValid}
                onClick={() => {
                    props.onMoveButtonClick(1);
                }}
                className={`btn_bottom ${
                    buttonDisable || inValid ? 'bg_gray3' : 'bg_primaryblue'
                }`}
            >
                <p className="p_btn_bottom txt_wh txt_b">다음</p>
            </Button>
        </div>
    );
};

export default SignupProfileComponent;
