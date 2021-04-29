import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import http from '../../http';
import { CurrentUserState } from '../../recoil/Session';
import LoaderComponent from '../Common/LoaderComponent';
import { COLOR_SET } from '../Giving/DataModel';
import { RankingDataSet } from './DataModel';

const useStyles = makeStyles(() => ({
    text: {
        display: 'inline-block',
        maxWidth: '55px',
        minWidth: '50px',
        whiteSpace: 'nowrap',
        textAlign: 'right',
        overflow: 'hidden !important',
        textOverflow: 'ellipsis',
    },
    money: {
        position: 'relative',
        display: 'inline-block',
        fontFamily: "'Recursive', sans-serif",
        fontSize: '17px',
    },
}));

const MAX_SHOW_MEMBER = 8;

const getRage = (sortMemger: RankingDataSet[]): [number, number] => {
    if (sortMemger.length >= 1) {
        const maxValueLen = sortMemger[0].friendPoint;
        const minValueLen = sortMemger[sortMemger.length - 1].friendPoint;

        const max = maxValueLen * 1.1;
        const min = minValueLen * 0.9;
        return [min, max];
    } else {
        return [0, 0];
    }
};

const TCRankList: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const userInfo = useRecoilValue(CurrentUserState);
    const [titleStr, setTitleStr] = useState<string[]>([]);
    const [rankList, setRankList] = useState<RankingDataSet[]>([]);
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [start, end] = getRage(rankList);
    useEffect(() => {
        http.get(`/api/rank/friends/${userInfo.nickname}`).then((res) => {
            console.log(res);
            const insertData: RankingDataSet[] = [];
            res.data.data.forEach((eachData: RankingDataSet, index: number) => {
                const isMy: boolean =
                    eachData.friendNickname === userInfo.nickname;
                insertData.push(
                    isMy ? { ...eachData, friendNickname: '나' } : eachData
                );
                if (isMy) {
                    if (index === 0) {
                        setTitleStr([
                            '대단한데요?',
                            '친구들 중에서 1등이에요!',
                        ]);
                    } else if (index === 1) {
                        setTitleStr([
                            '와! 잘하고 있어요!',
                            '1등을 향해 가즈아~',
                        ]);
                    } else if (index === 2) {
                        setTitleStr([
                            '열심히 하고 있군요!',
                            '좀 더 노력해봐요~',
                        ]);
                    } else {
                        setTitleStr([
                            '아직 멀었네요.',
                            '착한 소비를 시도해볼까요?',
                        ]);
                    }
                }
                console.log(eachData);
            });
            setIsLoad(true);
            setRankList(insertData.slice(0, MAX_SHOW_MEMBER));
        });
    }, []);

    const onClick = () => {
        history.push('/add-friend');
    };

    if (!isLoad) {
        return <LoaderComponent color="#62C3EB" />;
    }

    return (
        <>
            <Box mt="30px">
                {titleStr.map((eachString, index) => {
                    return (
                        <Typography key={index} className="txt_b txt_20">
                            {eachString}
                        </Typography>
                    );
                })}
            </Box>

            <Card
                style={{
                    borderRadius: '0.5rem',
                    marginTop: '24px',
                }}
            >
                <CardContent>
                    <Box display="flex" flexDirection="row">
                        <Box>
                            <Typography className="txt_b txt_20 txt_line mg_r10">
                                친구
                            </Typography>
                            <Typography className="txt_16 txt_line">
                                {rankList.length}
                            </Typography>
                        </Box>
                        <Box flexGrow={1} />
                        <Box>
                            <Button
                                onClick={onClick}
                                className="btn_blueBorder txt_14"
                            >
                                추가
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Grid>
                            {rankList.map((eachData, index) => {
                                return (
                                    <Box
                                        display="flex"
                                        key={eachData.friendNickname}
                                        my="1.5rem"
                                    >
                                        <Box
                                            width="1.5rem"
                                            height="2rem"
                                            position="relative"
                                        >
                                            {index <= 2 && (
                                                <img
                                                    src={`/images/ICON_ranking${
                                                        index + 1
                                                    }.png`}
                                                />
                                            )}
                                        </Box>
                                        <Box flexGrow="1" ml="0.5rem">
                                            <Box
                                                mt="0.3rem"
                                                height="40%"
                                                width={`${
                                                    (eachData.friendPoint /
                                                        (end - start)) *
                                                    100
                                                }%`}
                                                style={{
                                                    backgroundColor:
                                                        COLOR_SET[
                                                            index >= 5
                                                                ? 4
                                                                : index
                                                        ],
                                                }}
                                            />
                                            <Typography
                                                className={classes.money}
                                            >
                                                {eachData.friendPoint}원
                                            </Typography>
                                        </Box>
                                        <Typography
                                            className={`${classes.text} ${
                                                eachData.friendNickname === '나'
                                                    ? 'txt_primaryBlue'
                                                    : ''
                                            }`}
                                        >
                                            {eachData.friendNickname}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default TCRankList;
