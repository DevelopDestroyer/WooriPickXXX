import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Dialog,
    IconButton,
    Typography,
} from '@material-ui/core';
import React from 'react';
interface ACDialogProps {
    title: string;
    open: boolean;
    fingerClick: () => void;
    onClose: () => void;
}

const FingerDialog: React.FC<ACDialogProps> = (props: ACDialogProps) => {
    const { title, onClose, open, fingerClick } = props;

    return (
        <Dialog onClose={onClose} open={open}>
            <Card>
                <CardHeader
                    title={
                        <Typography className="txt_20 txt_b">
                            {title}
                        </Typography>
                    }
                    subheader={
                        <Typography className="txt_14">
                            더욱 쉽고 빠른 로그인을 위해 지문을 등록해 주세요.
                        </Typography>
                    }
                />
                <CardContent style={{ textAlign: 'center' }}>
                    <IconButton onClick={fingerClick}>
                        <img src="/images/Fingerprint_Color.png" />
                    </IconButton>
                    <Typography className="txt_14">센서에 지문인식</Typography>
                </CardContent>
                <CardActions
                    style={{ justifyContent: 'flex-end', paddingTop: 0 }}
                >
                    <Button
                        onClick={onClose}
                        disableRipple
                        style={{ color: '#62C3EB' }}
                    >
                        취소
                    </Button>
                </CardActions>
            </Card>
        </Dialog>
    );
};

export default FingerDialog;
