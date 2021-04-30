import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentUserState } from '../../recoil/Session';
import { CommonInterface } from './DataModel';
import GivingCommon from './GivingCommon';

const GivingFinishComponent: React.FC<CommonInterface> = ({
    index,
    onMoveClick,
}: CommonInterface) => {
    const userInfo = useRecoilValue(CurrentUserState);
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
                    기부 블록이 만들어졌어요!
                </Typography>
                <Typography className="txt_20">
                    {userInfo.nickname}님의 나눔으로
                </Typography>
                <Typography className="txt_20">
                    세상이 한 층 더 밝아졌어요!
                </Typography>
                <br />
                <Typography className="txt_20">
                    {userInfo.nickname}님의 기부블록이 기부빌딩에
                </Typography>
                <Typography className="txt_20">
                    쌓여지면 알람으로 공유됩니다.
                </Typography>
                <Box flexGrow="1" />
                <p className="txt_center">
                    <img
                        className="img_rending"
                        src="/images/blockchain_after.png"
                    />
                </p>
                <Box mb="45px" />
            </Box>
        </GivingCommon>
    );
};

export default GivingFinishComponent;
