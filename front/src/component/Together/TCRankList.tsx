import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { FriendDataSetState } from '../../recoil/Together';

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

const TCRankList: React.FC = () => {
    const setFrined = useSetRecoilState(FriendDataSetState);
    const resetFriend = useResetRecoilState(FriendDataSetState);
    const history = useHistory();

    return (
        <Card style={{ borderRadius: '0.5rem' }}>
            <CardHeader title={<Typography>친구</Typography>} />
            <Button onClick={resetFriend}>삭제</Button>
            <CardContent></CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}></CardActions>
        </Card>
    );
};

export default TCRankList;
