import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentUserState } from '../../recoil/Session';
import { TogetherAVGState } from '../../recoil/Together';
import LoaderComponent from '../Common/LoaderComponent';

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

const TCStatus: React.FC = () => {
    const classes = useStyles();
    const userInfo = useRecoilValue(CurrentUserState);
    const avgInfo = useRecoilValue(TogetherAVGState);

    return (
        <Card style={{ backgroundColor: '#62C3EB', borderRadius: '0.5rem' }}>
            {avgInfo.aveRank >= 0 ? (
                <>
                    <CardHeader
                        title={
                            <Box>
                                <Typography
                                    className={`txt_b txt_20 txt_wh ${classes.inline}`}
                                >
                                    {`${userInfo.nickname}님 `}
                                </Typography>
                                <Typography
                                    className={`txt_16 txt_wh ${classes.inline}`}
                                >
                                    이 받은 혜택
                                </Typography>
                            </Box>
                        }
                    />
                    <CardContent>
                        <Box mt="30px">
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography className="txt_14 txt_b txt_wh txt_center">
                                        이번 달
                                    </Typography>
                                    <Box pt="11px" textAlign="center">
                                        <Typography
                                            className={`txt_wh ${classes.moneyFont}`}
                                        >
                                            {avgInfo.thisMonthBenefitPoint}
                                        </Typography>
                                        <Typography className="txt_wh txt_16 txt_line">
                                            원
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className="txt_14 txt_b txt_wh txt_center">
                                        지난 3개월
                                    </Typography>
                                    <Box pt="11px" textAlign="center">
                                        <Typography
                                            className={`txt_wh ${classes.moneyFont}`}
                                        >
                                            {avgInfo.ago3MonthBenefitPoint}
                                        </Typography>
                                        <Typography className="txt_wh txt_16 txt_line">
                                            원
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </>
            ) : (
                <LoaderComponent color="white" />
            )}
        </Card>
    );
};

export default TCStatus;
