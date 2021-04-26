import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentUserState } from '../../recoil/Session';
import { TogetherAVGState } from '../../recoil/Together';

const useStyles = makeStyles(() => ({
    moneyFont: {
        position: 'relative',
        display: 'inline-block',
        fontFamily: "'Recursive', sans-serif !important",
        fontSize: '24px',
    },
    inline: {
        display: 'inline',
    },
    cardActionLayout: {
        padding: '16px',
    },
}));

const TCRanking: React.FC = () => {
    const classes = useStyles();
    const userInfo = useRecoilValue(CurrentUserState);
    const avgInfo = useRecoilValue(TogetherAVGState);

    return (
        <Card style={{ borderRadius: '0.5rem' }}>
            {avgInfo.aveRank >= 0 ? (
                <>
                    <CardHeader
                        title={
                            <Box>
                                <Typography
                                    className={`txt_b txt_20 ${classes.inline}`}
                                >
                                    {`${userInfo.nickname}님 `}
                                </Typography>
                                <Typography
                                    className={`txt_16 ${classes.inline}`}
                                >
                                    의 혜택통 순위입니다.
                                </Typography>
                            </Box>
                        }
                    />
                    <CardContent>
                        <Box mt="30px">
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography className="txt_14 txt_b txt_center">
                                        나
                                    </Typography>
                                    <Box pt="11px" textAlign="center">
                                        <Typography className="txt_16 txt_line">
                                            상위
                                        </Typography>
                                        <Typography
                                            className={`${classes.moneyFont} txt_primaryBlue`}
                                        >
                                            {avgInfo.myRank}
                                        </Typography>
                                        <Typography className="txt_16 txt_line">
                                            %
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className="txt_14 txt_b txt_center">
                                        모든 사용자 평균
                                    </Typography>
                                    <Box pt="11px" textAlign="center">
                                        <Typography className="txt_16 txt_line">
                                            {'상위 '}
                                        </Typography>
                                        <Typography
                                            className={`${classes.moneyFont}`}
                                        >
                                            {avgInfo.aveRank}
                                        </Typography>
                                        <Typography className="txt_16 txt_line">
                                            %
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </>
            ) : (
                <Box
                    height="124px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircularProgress style={{ color: 'black' }} />
                </Box>
            )}
        </Card>
    );
};

export default TCRanking;
