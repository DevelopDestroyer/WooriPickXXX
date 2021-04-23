import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { CommonInterface } from './DataModel';
import GivingCommon from './GivingCommon';

const GivingFinishComponent: React.FC<CommonInterface> = ({
    index,
    onMoveClick,
}: CommonInterface) => {
    return (
        <GivingCommon
            headerTitle="기부하기"
            isLast={true}
            onMoveClick={(nextMove: number) => {
                onMoveClick(index + nextMove);
            }}
            buttonTitle="홈으로 이동"
        >
            <Box display="flex" flexDirection="column" height="100%">
                <Box mt="25px" />
                <Typography className="txt_20 txt_b">
                    기부 모금이 완료되었어요.
                </Typography>
                <Typography className="txt_20">진영님의 나눔으로</Typography>
                <Typography className="txt_20">
                    세상이 한 층 더 밝아졌어요!
                </Typography>
                <br />
                <Typography className="txt_20">기부는 블록체인으로</Typography>
                <Typography className="txt_20">
                    투명하게 공개진행됩니다.
                </Typography>
                <Box flexGrow="1" />
                <p className="txt_center">
                    <img className="img_rending" src="/images/rending_4.png" />
                </p>
                <Box mb="45px" />
            </Box>
        </GivingCommon>
    );
};

export default GivingFinishComponent;
