import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React, { PropsWithChildren } from 'react';

export interface SignUpCommon {
    buttonDisable: boolean;
    isLast?: boolean;
    onMoveButtonClick: (move: number) => void;
    onCustomizeNextClick?: () => void;
}

const SignupCommonComponent: React.FC<PropsWithChildren<SignUpCommon>> = (
    props: PropsWithChildren<SignUpCommon>
) => {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar style={{ alignItems: 'center' }}>
                    {!props.isLast && (
                        <IconButton
                            className="back_div"
                            disabled={props.isLast}
                            onClick={() => props.onMoveButtonClick(-1)}
                        >
                            <KeyboardArrowLeft
                                style={{
                                    display: `${
                                        props.isLast ? 'none' : 'block'
                                    }`,
                                }}
                            />
                        </IconButton>
                    )}
                    <Typography className="txt_24 txt_b">
                        혜택통 만들기
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="glow_body">
                <div className="container mg_t30" style={{ height: '100%' }}>
                    {props.children}
                </div>
            </div>
            <Button
                disableRipple={props.buttonDisable}
                disabled={props.buttonDisable}
                className={`btn_bottom ${
                    props.buttonDisable ? 'bg_gray3' : 'bg_primaryblue'
                }`}
                onClick={() => {
                    props.onCustomizeNextClick
                        ? props.onCustomizeNextClick()
                        : props.onMoveButtonClick(1);
                }}
            >
                <p className="p_btn_bottom txt_wh txt_b">
                    {props.isLast ? '완료! 혜택 받으러 가기' : '다음'}
                </p>
            </Button>
        </>
    );
};

export default SignupCommonComponent;
