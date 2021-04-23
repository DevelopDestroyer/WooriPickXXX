import {
    Box,
    Card,
    CardContent,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { getNumberString } from '../Common/util';

const useStyles = makeStyles(() => ({
    moneyFont: {
        fontFamily: "'Recursive', sans-serif !important",
        fontSize: '36px',
        textAlign: 'center',
    },
}));

interface GivingComponentStatusProps {
    money: number;
}

const GivingComponentStatus: React.FC<GivingComponentStatusProps> = ({
    money,
}: GivingComponentStatusProps) => {
    const classes = useStyles();

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
        </Card>
    );
};

export default GivingComponentStatus;
