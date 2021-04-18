import { Box, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import FingerDialog from '../Common/FingerDialog';
import { SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

const SignupPasswordComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [fingerDialog, setFingerDialog] = useState<boolean>(false);

    const onClose = () => {
        setFingerDialog(false);
        props.onMoveButtonClick(1);
    };

    return (
        <div className="bg_gray5">
            <FingerDialog open={fingerDialog} onClose={onClose} />
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
