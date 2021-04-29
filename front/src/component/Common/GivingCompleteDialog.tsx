import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    Divider,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DonationResState } from '../../recoil/Giving';
import { CurrentUserState } from '../../recoil/Session';

const useStyles = makeStyles(() => ({
    dialog: {
        fontSize: '0.8rem !important',
        '& .MuiBackdrop-root': {
            backgroundColor: '#00000000',
        },
    },
    paper: {
        position: 'absolute',
        top: 0,
        margin: '10px 0 0 0',
        maxWidth: '100%',
        width: '100%',
        borderRadius: '1rem',
    },
    card: {
        minHeight: '0 !important',
    },
    img: {
        width: '1.1rem',
        height: '1.1rem',
    },
    title: {
        marginLeft: '0.3rem',
        fontSize: '0.8rem',
        color: '#62C3EB',
    },
    dec: {
        fontSize: '0.8rem',
    },
}));

const GivingCompleteDialog: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const [openData, setOpenData] = useRecoilState(DonationResState);
    const userInfo = useRecoilValue(CurrentUserState);
    const handleOutter = () => {
        // onClose();
        setOpenData({
            donationId: 0,
            open: false,
        });
    };

    const onClick = () => {
        handleOutter();
        history.push(`/blockchain/${openData.donationId}`);
    };

    return (
        <Dialog
            classes={{ paper: classes.paper }}
            className={classes.dialog}
            onClose={handleOutter}
            open={openData.open}
        >
            <Card className={classes.card}>
                <CardContent style={{ paddingBottom: 0 }}>
                    <Box display="flex">
                        <img
                            className={classes.img}
                            src="/images/small_logo.png"
                        />
                        <Typography className={classes.title}>
                            우리핏베네핏
                        </Typography>
                    </Box>
                    <Typography className={classes.dec}>
                        {userInfo.nickname}님.
                    </Typography>
                    <Typography className={classes.dec}>
                        블록이 빌딩위에 쌓였어요. 확인해보세요.
                    </Typography>
                    <Box my="5px">
                        <Divider />
                    </Box>
                    <Box textAlign="center" my="5px">
                        <Button
                            onClick={onClick}
                            style={{
                                padding: 0,
                                color: '#3BAAD8',
                                backgroundColor: 'white',
                            }}
                        >
                            보기
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Dialog>
    );
};

export default GivingCompleteDialog;
