import { Button, IconButton } from '@material-ui/core';
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
            <div className="toptitle_div bg_wh">
                <div className="container">
                    <IconButton
                        className="back_div"
                        disabled={props.isLast}
                        onClick={() =>
                            props.isLast || props.onMoveButtonClick(-1)
                        }
                    >
                        {props.isLast || <KeyboardArrowLeft />}
                    </IconButton>
                    <p className="txt_24 txt_b mg_t10">혜택통 만들기</p>
                </div>
            </div>
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
