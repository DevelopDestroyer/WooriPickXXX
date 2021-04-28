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
import { getNumberString } from '../Common/util';

const useStyles = makeStyles(() => ({
    moneyFont: {
        fontFamily: "'Recursive', sans-serif !important",
        fontSize: '36px',
        textAlign: 'center',
    },
    button: {
        flexGrow: 1,
        flexBasis: 0,
        borderRadius: '0.5rem',
        backgroundColor: '#3BAAD8',
        color: 'white',
    },
}));

interface GivingComponentStatusProps {
    money: number;
}

const GivingComponentStatus: React.FC<GivingComponentStatusProps> = ({
    money,
}: GivingComponentStatusProps) => {
    const classes = useStyles();
    const history = useHistory();
    const onClick = () => {
        history.push('/chain-select');
    };

    return (
        <Card
            style={{
                borderRadius: '0.5rem',
            }}
        >
            <CardContent>
                <Typography className="txt_20">이번달에 모인</Typography>
                <Typography className="txt_b txt_20">
                    총 기부액이에요!
                </Typography>
                <Box mt="20px">
                    <Typography
                        className={`txt_primaryBlue2 ${classes.moneyFont}`}
                    >
                        {getNumberString(money)}원
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={onClick} className={classes.button}>
                    실시간 기부 상황 보기
                </Button>
            </CardActions>
        </Card>
    );
};

export default GivingComponentStatus;
