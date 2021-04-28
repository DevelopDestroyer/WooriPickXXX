import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Dialog,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { getGivingNameFromId, getNumberString } from '../Common/util';
import { BlockChainDataSet } from '../Giving/DataModel';

type PropsType = BlockChainDataSet & {
    isMine: boolean;
    floor: number;
    donationId: number;
};

interface InfoDialogProps {
    open: boolean;
    data: PropsType;
    onClose: () => void;
}

const InfoDialog: React.FC<InfoDialogProps> = (props: InfoDialogProps) => {
    const { onClose, data, open } = props;

    const handleOk = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleOk} open={open}>
            <Card>
                <CardHeader
                    title={
                        <Typography className="txt_20 txt_b txt_primaryBlue">
                            {data.name}님의 블록 정보
                        </Typography>
                    }
                />
                <CardContent style={{ textAlign: 'center' }}>
                    <Box textAlign="start" style={{ overflowWrap: 'anywhere' }}>
                        <Typography className="txt_16 txt_b txt_line">
                            기부 카테고리:
                        </Typography>
                        <Typography className="txt_16 txt_gray1 txt_line">
                            {getGivingNameFromId(data.donationId)}
                        </Typography>
                    </Box>
                    <Box textAlign="start" style={{ overflowWrap: 'anywhere' }}>
                        <Typography className="txt_16 txt_b txt_line">
                            기부 날짜:
                        </Typography>
                        <Typography className="txt_16 txt_gray1 txt_line">
                            {data.timeString}
                        </Typography>
                    </Box>
                    <Box textAlign="start" style={{ overflowWrap: 'anywhere' }}>
                        <Typography className="txt_16 txt_b txt_line">
                            Timestamp:
                        </Typography>
                        <Typography className="txt_16 txt_gray1 txt_line">
                            {data.timeStamp}
                        </Typography>
                    </Box>
                    <Box textAlign="start" style={{ overflowWrap: 'anywhere' }}>
                        <Typography className="txt_16 txt_b txt_line">
                            Hash:
                        </Typography>
                        <Typography className="txt_16 txt_gray1 txt_line">
                            {data.hash}
                        </Typography>
                    </Box>
                    <Box textAlign="start" style={{ overflowWrap: 'anywhere' }}>
                        <Typography className="txt_16 txt_b txt_line">
                            Previous Hash:
                        </Typography>
                        <Typography className="txt_16 txt_gray1 txt_line">
                            {data.previousHash}
                        </Typography>
                    </Box>
                    <Box textAlign="start" style={{ overflowWrap: 'anywhere' }}>
                        <Typography className="txt_16 txt_b txt_line">
                            Nonce:
                        </Typography>
                        <Typography className="txt_16 txt_gray1 txt_line">
                            {data.nonce}
                        </Typography>
                    </Box>
                    <Box textAlign="start" style={{ overflowWrap: 'anywhere' }}>
                        <Typography className="txt_16 txt_b txt_line">
                            Target:
                        </Typography>
                        <Typography className="txt_16 txt_gray1 txt_line">
                            {data.target}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions
                    style={{ justifyContent: 'flex-end', paddingTop: 0 }}
                >
                    <Button
                        onClick={onClose}
                        disableRipple
                        style={{ color: '#62C3EB' }}
                    >
                        확인
                    </Button>
                </CardActions>
            </Card>
        </Dialog>
    );
};

const colorSet: any = {
    201: '#58937E',
    202: '#CC8A54',
    203: '#997194',
    204: '#517BB7',
    205: '#B34646',
};

const useStyles = makeStyles(() => ({
    card: {
        minHeight: '0 !important',
    },
}));

const BlockChainComponent: React.FC<PropsType> = (props: PropsType) => {
    const cardBgColor = props.isMine ? colorSet[props.donationId] : 'white';
    const mainColor = props.isMine ? 'white' : 'black';
    const subColor = props.isMine ? 'rgb(234 234 234)' : '#747474';
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <InfoDialog open={open} onClose={onClose} data={props} />
            <Card
                style={{
                    backgroundColor: cardBgColor,
                    borderRadius: '0.5rem',
                    minHeight: 0,
                }}
            >
                <CardContent>
                    <Box display="flex">
                        <Typography
                            style={{
                                color: mainColor,
                            }}
                            className={`txt_16 txt_b txt_line`}
                        >
                            {props.floor}층
                        </Typography>
                        <Box flexGrow="1" />
                        <Typography
                            onClick={onOpen}
                            style={{
                                color: mainColor,
                            }}
                            className={`txt_16 txt_b txt_line`}
                        >
                            자세히{'>'}
                        </Typography>
                    </Box>
                    <Box mt="5px">
                        <Typography
                            style={{
                                color: mainColor,
                            }}
                            className={`txt_16 txt_b txt_line`}
                        >
                            {props.name}
                        </Typography>
                        &nbsp;
                        <Typography
                            style={{
                                color: subColor,
                            }}
                            className={`txt_line`}
                        >
                            {props.timeString}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            style={{
                                color: mainColor,
                            }}
                            className={`txt_20 txt_b`}
                        >
                            {getNumberString(props.donationAmount)}원
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default BlockChainComponent;
