import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { getNumberString } from '../Common/util';
export interface BlockChainTopProps {
    title: string;
    floorCount: number;
    total: number;
}

const BlockChainTop: React.FC<BlockChainTopProps> = (
    props: BlockChainTopProps
) => {
    return (
        <>
            <Box>
                <Typography className={`txt_20 txt_line`}>현재</Typography>
                &nbsp;
                <Typography className={`txt_20 txt_b txt_line`}>
                    {props.title}빌딩
                </Typography>
                <Typography className={`txt_20 txt_line`}>은</Typography>
            </Box>
            <Box>
                <Typography className={`txt_20 txt_b txt_line`}>
                    {props.floorCount}층
                </Typography>
                <Typography className={`txt_20 txt_line`}>이며,</Typography>
            </Box>
            <Box>
                <Typography className={`txt_20 txt_line`}>
                    {`모금액은 `}
                </Typography>
                &nbsp;
                <Typography className={`txt_20 txt_b txt_line`}>
                    {getNumberString(props.total)}
                </Typography>
                &nbsp;
                <Typography className={`txt_20 txt_line`}>
                    {` 입니다`}
                </Typography>
            </Box>
        </>
    );
};

export default BlockChainTop;
