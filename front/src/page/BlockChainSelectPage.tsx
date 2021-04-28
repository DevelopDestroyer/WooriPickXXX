import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import HeaderAction from '../component/Common/HeaderAction';
import { BlockChainTotalSet, ChainAPIRes } from '../component/Giving/DataModel';
import http from '../http';
import { BlockChainState } from '../recoil/Giving';
import { CHAIN_TYPE } from './BlockChainPage';

const useStyles = makeStyles(() => ({
    iconButton: {
        maxWidth: '5rem',
        maxHeight: '5rem',
    },
    text: {
        marginTop: '5px',
    },
}));

const BlockChainSelectPage: React.FC = () => {
    const history = useHistory();
    const classes = useStyles();

    const setChainData = useSetRecoilState(BlockChainState);
    const onClickChain = (data: CHAIN_TYPE) => {
        history.push(`/blockchain/${data}`);
    };

    const goBackFunciton = () => {
        history.goBack();
    };

    useEffect(() => {
        http.get('/api/blocks').then((res) => {
            console.log(res.data);
            const insertValue: BlockChainTotalSet = {};
            res.data.forEach((eachData: ChainAPIRes) => {
                const dataArr: string[] = eachData.data.split(';');
                const givingTarget: number = Number(dataArr[3]).valueOf();
                if (!insertValue[givingTarget]) {
                    insertValue[givingTarget] = [];
                }
                console.log(dataArr);
                insertValue[givingTarget].push({
                    donationAmount: Number(dataArr[2]),
                    givingTarget: dataArr[1],
                    hash: eachData.hash,
                    name: dataArr[0],
                    nonce: eachData.nonce,
                    previousHash: eachData.previousHash,
                    target: eachData.target,
                    targetDepth: eachData.targetDepth,
                    timeStamp: eachData.timeStamp,
                    timeString: dataArr[4],
                });
            });
            console.log(insertValue);
            setChainData(insertValue);
        });
    }, []);

    return (
        <div className="bg_gray5">
            <HeaderAction
                isLast={false}
                headerTitle={'실시간 기부 상황'}
                onMoveClick={goBackFunciton}
            />

            <Box className="container">
                <Box mt="30px">
                    <Typography className="txt_20 txt_b">
                        실시간 기부를 확인할
                    </Typography>
                    <Typography className="txt_20 txt_b">
                        카테고리를 확인해 주세요.
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" mt="24px">
                    <Box display="flex">
                        <Box margin="auto">
                            <IconButton
                                onClick={() => onClickChain(CHAIN_TYPE.ENV)}
                                className={classes.iconButton}
                            >
                                <img src="/images/category_environ.png" />
                            </IconButton>
                            <Typography
                                className={`${classes.text} txt_16 txt_center`}
                            >
                                친환경
                            </Typography>
                        </Box>
                        <Box margin="auto">
                            <IconButton
                                onClick={() => onClickChain(CHAIN_TYPE.ANIMAL)}
                                className={classes.iconButton}
                            >
                                <img src="/images/category_animal.png" />
                            </IconButton>
                            <Typography
                                className={`${classes.text} txt_16 txt_center`}
                            >
                                동물보호
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" mt="15px">
                        <Box margin="auto">
                            <IconButton
                                onClick={() => onClickChain(CHAIN_TYPE.CHILD)}
                                className={classes.iconButton}
                            >
                                <img src="/images/category_children.png" />
                            </IconButton>

                            <Typography
                                className={`${classes.text} txt_16 txt_center`}
                            >
                                아동/노인 복지
                            </Typography>
                        </Box>
                        <Box margin="auto">
                            <IconButton
                                onClick={() => onClickChain(CHAIN_TYPE.DISABLE)}
                                className={classes.iconButton}
                            >
                                <img src="/images/category_disabled.png" />
                            </IconButton>
                            <Typography
                                className={`${classes.text} txt_16 txt_center`}
                            >
                                장애인 복지
                            </Typography>
                        </Box>
                    </Box>
                    <Box margin="auto" mt="14px">
                        <IconButton
                            onClick={() => onClickChain(CHAIN_TYPE.RELEIF)}
                            className={classes.iconButton}
                        >
                            <img src="/images/category_relief.png" />
                        </IconButton>
                        <Typography
                            className={`${classes.text} txt_16 txt_center`}
                        >
                            구호 물품
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default BlockChainSelectPage;
