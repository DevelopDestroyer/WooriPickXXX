import { Box } from '@material-ui/core';
import React from 'react';
import { SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

const SignupFinishComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    return (
        <div className="bg_gray5">
            <SignupCommonComponent
                isLast={true}
                buttonDisable={false}
                onMoveButtonClick={props.onMoveButtonClick}
            >
                <Box display="flex" flexDirection="column" height="100%">
                    <Box mt="25px" />
                    <p className="txt_20 txt_b">축하합니다!</p>
                    <p className="txt_20">혜택통이 만들어졌어요!</p>
                    <p className="txt_20">이제 착한 소비하고</p>
                    <p className="txt_20">혜택도 받으세요.</p>
                    <Box flexGrow="1" />
                    <p className="txt_center">
                        <img
                            className="img_rending"
                            src="/images/rending_1.png"
                        />
                    </p>
                    <Box mb="45px" />
                </Box>
            </SignupCommonComponent>
        </div>
    );
};

export default SignupFinishComponent;
