import {
    Box,
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import http from '../../http';
import { CurrentUserState } from '../../recoil/Session';
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
    const userInfo = useRecoilValue(CurrentUserState);
    const [titleStr, setTitleStr] = useState('');
    const [rankList, setRankList] = useState<RankingDataSet[]>([]);
    const [start, end] = getRage(titleStr);
    useEffect(() => {
        http.get(`/api/rank/friends/${userInfo.nickname}`).then((res) => {
            console.log(res);
            const insertData: RankingDataSet[] = [];
            res.data.data.forEach((eachData: RankingDataSet, index: number) => {
                insertData.push(eachData);
                if (eachData.friendNickname === userInfo.nickname) {
                    if (index === 0) {
                    } else if (index === 1) {
                    } else if (index === 2) {
                    } else {
                        setTitleStr('나머지 등수');
                    }
                }
                console.log(eachData);
            });
            setRankList(insertData.slice(0, MAX_SHOW_MEMBER));
        });
    }, []);

    return (
        <Card
            style={{
                borderRadius: '0.5rem',
            }}
        >
            <CardContent>
                <Typography className="txt_b txt_20">{titleStr}</Typography>
                <Box>
                    <Grid>
                        {rankList.map((eachData) => {
                            return (
                                <Box
                                    display="flex"
                                    key={eachMember.nickname}
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
                                                (eachMember.point /
                                                    (end - start)) *
                                                100
                                            }%`}
                                            style={{
                                                backgroundColor:
                                                    COLOR_SET[
                                                        index >= 5 ? 4 : index
                                                    ],
                                            }}
                                        />
                                        <Typography className={classes.money}>
                                            {eachMember.point}원
                                        </Typography>
                                    </Box>
                                    <Typography className={classes.text}>
                                        {eachMember.nickname}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TCRankList;
