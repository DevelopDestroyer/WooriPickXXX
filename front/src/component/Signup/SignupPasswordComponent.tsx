import { Box, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import http from '../../http';
import {
    CurrentUserState,
    SignUpAccInfoState,
    SignUpCategoryState,
    SignUpProfileState,
    UserInfo,
} from '../../recoil/Session';
import FingerDialog from '../Common/FingerDialog';
import { SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

interface SignupUserModel {
    name: string;
    nickname: string;
    accountNumber: string;
    accountMoney: string;
    phoneNumber: string;
    password: string;
}

interface SignupCategory {
    benefitCategoryList: Array<{ userNickname: string; categoryId: number }>;
}

const SignupPasswordComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const setUserState = useSetRecoilState<UserInfo>(CurrentUserState);

    const signupProfile = useRecoilValue(SignUpProfileState);
    const accountInfo = useRecoilValue(SignUpAccInfoState);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const resetProfile = useResetRecoilState(SignUpProfileState);
    const resetAccNum = useResetRecoilState(SignUpAccInfoState);
    const resetCategory = useResetRecoilState(SignUpCategoryState);

    const [fingerDialog, setFingerDialog] = useState<boolean>(false);

    const signupFunction = async () => {
        const signupData: SignupUserModel = {
            name: signupProfile.realName,
            nickname: signupProfile.nickName,
            phoneNumber: signupProfile.cellNumber,
            accountNumber: accountInfo.accountNumber,
            password: password,
            accountMoney: accountInfo.accountMoney + '',
        };
        const signupCategory: SignupCategory = {
            benefitCategoryList: [
                {
                    categoryId: 101,
                    userNickname: signupProfile.nickName,
                },
                {
                    categoryId: 102,
                    userNickname: signupProfile.nickName,
                },
            ],
        };

        const createRes = await http.post('/api/members', signupData); // user 먼저 만들어져야함
        console.log(createRes);
        const registRes = await http.post(
            '/api/members/category',
            signupCategory
        ); // user 먼저 만들어져야함
        console.log(registRes);
        const userRes = await http.get(
            `/api/members/${encodeURI(signupProfile.nickName)}`
        ); // user 먼저 만들어져야함
        console.log(userRes.data.data);
        const currentUser: UserInfo = userRes.data.data;
        setUserState({
            accountMoney: currentUser.accountMoney,
            point: currentUser.point,
            accountNumber: currentUser.accountNumber,
            name: currentUser.name,
            nickname: currentUser.nickname,
            phoneNumber: currentUser.phoneNumber,
        });
        resetProfile();
        resetAccNum();
        resetCategory();

        setFingerDialog(false);
        props.onMoveButtonClick(1);
    };

    const fingerClick = async () => {
        await signupFunction();
    };

    const fingerClose = () => {
        setFingerDialog(false);
    };

    return (
        <div className="bg_gray5">
            <FingerDialog
                title={'지문확인'}
                dscription={
                    '더욱 쉽고 빠른 로그인을 위해 지문을 등록해 주세요.'
                }
                fingerClick={fingerClick}
                open={fingerDialog}
                onClose={fingerClose}
            />
            <SignupCommonComponent
                buttonDisable={password === ''}
                onMoveButtonClick={props.onMoveButtonClick}
                onCustomizeNextClick={() => {
                    setFingerDialog(true);
                }}
            >
                <p className="txt_20 txt_b">앱 사용을 위한</p>
                <p className="txt_20">비밀번호를 설정해 주세요.</p>

                <Box mt="25px">
                    <TextField
                        style={{ width: '80%', marginLeft: '10%' }}
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        onChange={(event) => setPassword(event.target.value)}
                        InputProps={{
                            // <-- This is where the toggle button is added.
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? (
                                            <Visibility
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        ) : (
                                            <VisibilityOff
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </SignupCommonComponent>
        </div>
    );
};

export default SignupPasswordComponent;
