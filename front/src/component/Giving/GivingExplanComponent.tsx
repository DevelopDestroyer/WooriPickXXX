import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { CommonInterface } from './DataModel';
import GivingCommon from './GivingCommon';

const GivingExplanComponent: React.FC<CommonInterface> = ({
    index,
    onMoveClick,
}: CommonInterface) => {
    return (
        <GivingCommon
            headerTitle="기부하기"
            isLast={false}
            onMoveClick={(nextMove: number) => {
                onMoveClick(index + nextMove);
            }}
            buttonTitle="블록쌓기에 동참할래요!"
        >
            <Box display="flex" flexDirection="column" height="100%">
                <Box mt="25px" />
                <Typography className="txt_20">우리핏 베네핏은</Typography>
                <Typography className="txt_20 txt_b">
                    블록체인 기술로
                </Typography>
                <Typography className="txt_20 txt_b">
                    기부를 할 때마다 블록으로 만들어요.
                </Typography>
                <br />

                <Typography className="txt_20">
                    함께 하나씩 블록을 쌓아
                </Typography>
                <Typography className="txt_20">
                    높은 빌딩을 만들어 기부하세요.
                </Typography>

                <Box flexGrow="1" />
                <p className="txt_center">
                    <img
                        className="img_rending"
                        src="/images/blockchain_before.png"
                    />
                </p>
                <Box mb="45px" />
            </Box>
        </GivingCommon>
    );
};

export default GivingExplanComponent;
