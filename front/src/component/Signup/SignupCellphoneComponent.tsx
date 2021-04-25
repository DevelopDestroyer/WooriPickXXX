import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Dialog,
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SignUpProfileState } from '../../recoil/Session';
import { makeNumberId } from '../Common/util';
import { SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

interface ACDialogProps {
    open: boolean;
    validNumber: string;
    onClose: () => void;
}

const ACDialog: React.FC<ACDialogProps> = (props: ACDialogProps) => {
    const { onClose, open, validNumber } = props;

    const handleOk = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleOk} open={open}>
            <Card>
                <CardHeader
                    title={
                        <Typography className="txt_20 txt_b">
                            인증번호 확인
                        </Typography>
                    }
                    subheader={
                        <Typography className="txt_14">
                            인증번호 확인칸에 아래 번호를 입력하세요.
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography
                        className="txt_20 txt_b"
                        style={{ textAlign: 'center' }}
                    >
                        {validNumber}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ justifyContent: 'flex-end', paddingTop: 0 }}
                >
                    <Button
                        onClick={handleOk}
                        disableRipple
                        style={{ color: '#62C3EB' }}
                    >
                        확인
                    </Button>
                </CardActions>
            </Card>
        </Dialog>
    );
};

const SignupCellphoneComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    const [profile, setProfile] = useRecoilState(SignUpProfileState);

    const [dialog, setDialog] = useState<boolean>(false);
    const [complete, setComplete] = useState<boolean>(false);

    const [inputValidStr, setInputValidStr] = useState<string>('');
    const [validStr, setValidStr] = useState<string>('');

    const completeClick = () => {
        setComplete(true);
        setDialog(true);
    };

    const onChangePhoneNumber = (data: string) => {
        let onlyNums = data.replace(/[^0-9]/g, '');
        if (onlyNums.length > 11) {
            onlyNums = onlyNums.slice(0, 11);
        }
        setProfile({ ...profile, cellNumber: onlyNums });
    };

    const onCertButtonClick = () => {
        setDialog(true);
        setValidStr(makeNumberId(6));
    };

    const onVerifyButtonClick = () => {
        if (inputValidStr === validStr) {
            setComplete(true);
            // props.onMoveButtonClick(1);
        }
    };

    const certMode = validStr.length > 0;
    const inValid =
        profile.cellNumber.length < 10 || profile.cellNumber.length > 11;

    return (
        <div className="bg_gray5">
            <ACDialog
                validNumber={validStr}
                open={dialog}
                onClose={() => {
                    setDialog(false);
                }}
            />
            <SignupCommonComponent
                buttonDisable={!complete}
                onMoveButtonClick={props.onMoveButtonClick}
            >
                <p className="txt_20 txt_b">휴대폰번호를 입력하세요</p>
                <Box
                    className="bg_wh box_div mg_t20"
                    px="16px"
                    pt="20px"
                    pb="16px"
                >
                    <Grid container alignItems="center">
                        <TextField
                            disabled={certMode || complete}
                            error={inValid}
                            helperText={
                                inValid && '휴대전화 번호는 10~11 자리입니다'
                            }
                            value={profile.cellNumber}
                            onChange={(event) => {
                                onChangePhoneNumber(event.target.value);
                            }}
                            label={'휴대폰 번호'}
                            variant="outlined"
                        />
                        <Box flexGrow={1} />
                        <Button
                            disabled={inValid || complete}
                            className="btn_blueBorder"
                            style={{
                                padding: 0,
                            }}
                            onClick={onCertButtonClick}
                        >
                            {certMode ? '재인증' : '입력'}
                        </Button>
                    </Grid>
                </Box>

                {certMode && (
                    <>
                        <p className="mg_t30 txt_14 txt_center">
                            팝업창에 떴던 인증번호를 아래에 입력해주세요
                        </p>
                        <Box
                            className="box_div mg_t30 bg_wh"
                            px="16px"
                            pt="20px"
                            pb="16px"
                        >
                            <Grid container alignItems="center">
                                <TextField
                                    disabled={complete}
                                    error={inputValidStr !== validStr}
                                    value={inputValidStr}
                                    onChange={(event) => {
                                        setInputValidStr(event.target.value);
                                    }}
                                    label={'인증번호 확인'}
                                    variant="outlined"
                                />
                                <Box flexGrow={1} />
                                <Button
                                    disabled={complete}
                                    className="btn_blueBorder"
                                    style={{
                                        padding: 0,
                                    }}
                                    onClick={onVerifyButtonClick}
                                >
                                    완료
                                </Button>
                            </Grid>
                        </Box>
                    </>
                )}
            </SignupCommonComponent>
        </div>
    );
};

export default SignupCellphoneComponent;

//import { TextField } from '@material-ui/core';
//import React, { useState } from 'react';
//import { useRecoilState } from 'recoil';
//import http from '../../http';
//import { SignUpProfileState } from '../../recoil/Session';
//import {
//    SignupComponentProps,
//    SignupProfileInfo,
//    SignupProfileInterface,
//} from './DataModel';
//import SignupCommonComponent from './SignupCommon';
//
//type SignupProfileProps = SignupComponentProps & {
//    data: SignupProfileInterface;
//    index: number;
//};
//
//const parseData = (data: SignupProfileInfo, index: number): string => {
//    switch (index) {
//        case 0:
//            return data.realName;
//        case 1:
//            return data.nickName;
//        case 2:
//            return data.cellNumber;
//    }
//    return '';
//};
//
//const SignupProfileComponent: React.FC<SignupProfileProps> = (
//    props: SignupProfileProps
//) => {
//    const [profile, setProfile] = useRecoilState(SignUpProfileState);
//    const value = parseData(profile, props.index);
//    const buttonDisable = value === '';
//    const [inValid, setInValid] = useState<boolean>(false);
//    const [helperText, setHelperText] = useState<string>('');
//
//    const onChange = (index: number, data: string) => {
//        switch (index) {
//            case 0:
//                setProfile({ ...profile, realName: data });
//                break;
//            case 1:
//                if (data !== '') {
//                    http.get(`/api/members/nicknameCheck/${data}`).then(
//                        (res) => {
//                            const alreadyExist: boolean = res.data.data;
//                            if (alreadyExist !== inValid) {
//                                setInValid(alreadyExist);
//                                setHelperText('이미 존재하는 닉네임입니다.');
//                            }
//                        }
//                    );
//                }
//                setProfile({ ...profile, nickName: data });
//
//                break;
//            case 2:
//                let onlyNums = data.replace(/[^0-9]/g, '');
//                if (onlyNums.length > 11) {
//                    onlyNums = onlyNums.slice(0, 11);
//                }
//                setProfile({ ...profile, cellNumber: onlyNums });
//                if (onlyNums.length < 10 || onlyNums.length > 11) {
//                    setInValid(true);
//                    setHelperText('휴대전화 번호는 10~11 자리입니다');
//                } else {
//                    setInValid(false);
//                }
//                break;
//        }
//    };
//
//    return (
//        <div className="bg_gray5">
//            <SignupCommonComponent
//                buttonDisable={buttonDisable || inValid}
//                onMoveButtonClick={props.onMoveButtonClick}
//            >
//                <p className="txt_20 txt_b">{props.data.title}</p>
//                <div className="box_div mg_t20 bg_wh">
//                    <div className="pd_t16 mg_l16"></div>
//                    <div className="pd_t4 mg_l16 pd_b16">
//                        <TextField
//                            error={inValid}
//                            helperText={inValid && helperText}
//                            value={value}
//                            onChange={(event) => {
//                                onChange(props.index, event.target.value);
//                            }}
//                            label={props.data.description}
//                            variant="outlined"
//                        />
//                    </div>
//                </div>
//            </SignupCommonComponent>
//        </div>
//    );
//};
//
//export default SignupProfileComponent;
//
