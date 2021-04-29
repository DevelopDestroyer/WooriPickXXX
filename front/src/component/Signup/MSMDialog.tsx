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

export interface MSMDialogProps {
    onClose(): void;
    validStr: string;
    open: boolean;
}

const MSMDialog: React.FC<MSMDialogProps> = (props: MSMDialogProps) => {
    const classes = useStyles();

    return (
        <Dialog
            classes={{ paper: classes.paper }}
            className={classes.dialog}
            onClose={props.onClose}
            open={props.open}
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
                        인증번호는 {props.validStr} 입니다.
                    </Typography>
                    <Box my="5px">
                        <Divider />
                    </Box>
                    <Box textAlign="center" my="5px">
                        <Button
                            onClick={props.onClose}
                            style={{
                                padding: 0,
                                color: '#3BAAD8',
                                backgroundColor: 'white',
                            }}
                        >
                            확인
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Dialog>
    );
};

export default MSMDialog;
