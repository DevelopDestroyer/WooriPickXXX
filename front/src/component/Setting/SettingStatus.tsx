import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
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
        fontFamily: '"Recursive", sans-serif !important',
    },
    inline: {
        display: 'inline',
    },
    cardActionLayout: {
        padding: '16px',
    },
}));

const SettingStatus: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const userInfo = useRecoilValue(CurrentUserState);
    //const [account, setAccount] = useRecoilState(CurrentAccountState);

    return (
        <Card style={{ borderRadius: '0.5rem' }}>
            <CardContent>
                <Typography className="txt_20 txt_b">계좌정보</Typography>
                <Typography className="txt_gray1 pd_t10">
                    {userInfo.accountNumber}
                </Typography>
                <Box textAlign="end">
                    <Typography className={`txt_16 ${classes.inline}`}>
                        잔액
                    </Typography>
                    <Typography
                        className={`txt_32 ${classes.inline} ${classes.moneyFont}`}
                    >
                        {getNumberString(userInfo.accountMoney)}
                    </Typography>
                    <Typography className={`${classes.inline} `}>원</Typography>
                </Box>
            </CardContent>
            <CardActions classes={{ root: classes.cardActionLayout }}>
                <Button
                    className={`${classes.buttonLayout} ${classes.dfColor}`}
                >
                    계좌 변경
                </Button>
            </CardActions>
        </Card>
    );
};

export default SettingStatus;
