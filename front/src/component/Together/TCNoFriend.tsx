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
import { useSetRecoilState } from 'recoil';
import { FriendDataSetState } from '../../recoil/Together';
import { DUMMY_FRIEND_SET } from './DataModel';

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

const TCNoFriend: React.FC = () => {
    const setFrined = useSetRecoilState(FriendDataSetState);
    const history = useHistory();
    const onAddFriend = (event: any) => {
        setFrined(DUMMY_FRIEND_SET);
        history.push('/add-friend');
        event.preventDefault();
        if (window && window.parent) {
            //window.parent.postMessage('child;;;requestPhoneNumber', '*');
        }
    };

    return (
        <Card
            style={{
                border: 'solid',
                borderWidth: '2px',
                borderColor: '#62C3EB',
                borderRadius: '0.5rem',
            }}
        >
            <CardContent>
                <Typography className="txt_14">
                    투게더를 통해 친구들과 함께 혜택통을 즐길 수 있어요. 지금
                    시작해볼까요?
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
                <Box mr="13px">
                    <Button
                        onClick={onAddFriend}
                        className="btn_blue txt_wh txt_14"
                    >
                        시작
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default TCNoFriend;
