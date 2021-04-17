import { Button, IconButton, TextField } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React from 'react';
import { useRecoilState } from 'recoil';
import { useDebouncedCallback } from 'use-debounce';
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

    const deboundCB = useDebouncedCallback(
        (value: string) => {
            onChange(props.index, value);
        },
        // delay in ms
        1000
    );

    const onChange = (index: number, data: string) => {
        switch (index) {
            case 0:
                setProfile({ ...profile, realName: data });
                break;
            case 1:
                setProfile({ ...profile, nickName: data });
                break;
            case 2:
                setProfile({ ...profile, cellNumber: data });
                break;
        }
    };
    return (
        <div
            className="bg_gray5"
            style={{ position: 'relative', width: '100%', height: '100%' }}
        >
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

            <div className="container mg_t30" style={{ overflow: 'hidden' }}>
                <p className="txt_20 txt_b">{props.data.title}</p>

                <div className="box_div mg_t20 bg_wh">
                    <div className="pd_t16 mg_l16"></div>
                    <div className="pd_t4 mg_l16 pd_b16">
                        <TextField
                            value={value}
                            onChange={(event) => deboundCB(event.target.value)}
                            id="outlined-basic"
                            label={props.data.description}
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>

            <Button
                disableRipple={buttonDisable}
                disabled={buttonDisable}
                onClick={() => {
                    props.onMoveButtonClick(1);
                }}
                className={`btn_bottom ${
                    buttonDisable ? 'bg_gray3' : 'bg_primaryblue'
                }`}
            >
                <p className="p_btn_bottom txt_wh txt_b">다음</p>
            </Button>
        </div>
    );
};

export default SignupProfileComponent;
