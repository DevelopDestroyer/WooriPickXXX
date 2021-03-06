import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import http from '../../http';
import { CurrentUserState } from '../../recoil/Session';
import { getNumberString } from '../Common/util';

const useStyles = makeStyles(() => ({
    dfColor: {
        color: 'white',
    },
    buttonLayout: {
        backgroundColor: '#3BAAD8',
        borderRadius: '0.5rem',
        flexBasis: 0,
        flexGrow: 1,
    },
    moneyFont: {
        fontSize: '26px',
        fontFamily: '"Recursive", sans-serif !important',
    },
    inline: {
        display: 'inline',
    },
    cardActionLayout: {
        padding: '16px',
    },
}));

const HCStatus: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const [userInfo, setUserInfo] = useRecoilState(CurrentUserState);
    //const [account, setAccount] = useRecoilState(CurrentAccountState);

    useEffect(() => {
        if (userInfo.nickname) {
            http.get(`/api/members/${encodeURI(userInfo.nickname)}`).then(
                (res) => {
                    setUserInfo({
                        ...userInfo,
                        accountMoney: res.data.data.accountMoney,
                        point: res.data.data.point,
                    });
                }
            );
        }
    }, []);

    const onGivingClick = () => {
        history.push('/giving');
    };

    return (
        <Card style={{ backgroundColor: '#62C3EB', borderRadius: '0.5rem' }}>
            <CardContent>
                <Typography className={classes.dfColor}>
                    {`${userInfo.nickname}님의`}
                    <br />
                    혜택통 현황입니다.
                </Typography>
                <Typography
                    className={`${classes.inline} ${classes.moneyFont} ${classes.dfColor}`}
                >
                    {getNumberString(userInfo.point)}
                </Typography>
                <Typography className={`${classes.inline} ${classes.dfColor}`}>
                    원
                </Typography>
            </CardContent>
            <CardActions classes={{ root: classes.cardActionLayout }}>
                <Button
                    disabled={userInfo.point === 0}
                    className={`${classes.buttonLayout} ${classes.dfColor}`}
                >
                    내 계좌로 인출
                </Button>
                <Button
                    className={`${classes.buttonLayout} ${classes.dfColor}`}
                    onClick={onGivingClick}
                >
                    기부하기
                </Button>
            </CardActions>
        </Card>
    );
};

export default HCStatus;
