import { Box, makeStyles, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import {
    useRecoilState,
    useRecoilValue,
    useResetRecoilState,
    useSetRecoilState,
} from 'recoil';
import http from '../../http';
import {
    DonationResState,
    GivingAmountState,
    GivingSelectState,
} from '../../recoil/Giving';
import { CurrentUserState } from '../../recoil/Session';
import FingerDialog from '../Common/FingerDialog';
import { getNumberString } from '../Common/util';
import { CommonInterface } from './DataModel';
import GivingCommon from './GivingCommon';

const useStyles = makeStyles(() => ({
    inputText: {
        '&>div>input': {
            textAlign: 'center',
        },
        '&>p': {
            textAlign: 'center',
        },
    },
}));

const isValid = (origin: number, max: number) => {
    return 0 < origin && origin <= max;
};

const GivingAmountComponent: React.FC<CommonInterface> = ({
    index,
    onMoveClick,
}: CommonInterface) => {
    const classes = useStyles();
    const resetSelect = useResetRecoilState(GivingSelectState);
    const resetAmount = useResetRecoilState(GivingAmountState);

    const [givingAmount, setGivingAmount] = useRecoilState(GivingAmountState);
    const givingSelect = useRecoilValue(GivingSelectState);
    const userInfo = useRecoilValue(CurrentUserState);

    const [open, setOpen] = useState<boolean>(false);
    const setDonationRes = useSetRecoilState(DonationResState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGivingAmount(Number(event.target.value));
    };

    const onFingerClick = () => {
        http.post(`/api/trading/donation`, {
            userNickname: userInfo.nickname,
            donationId: givingSelect[0].id,
            donationPoint: givingAmount,
        }).then(() => {
            console.log('기부 완료');
            setDonationRes({
                donationId: givingSelect[0].id,
                open: true,
            });
        });
        resetSelect();
        resetAmount();
        setOpen(false);
        onMoveClick(index + 1);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <GivingCommon
            headerTitle="기부하기"
            isLast={false}
            buttonDisable={!isValid(givingAmount, userInfo.point)}
            onMoveClick={(nextMove: number) => {
                if (nextMove < 0) {
                    onMoveClick(index + nextMove);
                } else {
                    setOpen(true);
                }

                // onMoveClick(index + nextMove);
            }}
            buttonTitle="다음"
        >
            <FingerDialog
                fingerClick={onFingerClick}
                open={open}
                onClose={onClose}
            />
            <Box mt="30px">
                <p className="txt_20">기부하고 싶은</p>
                <p className="txt_20 txt_b">금액을 입력하세요.</p>
            </Box>

            <Box mt="25px">
                <TextField
                    classes={{
                        root: classes.inputText,
                    }}
                    style={{
                        width: '80%',
                        marginLeft: '10%',
                    }}
                    helperText={`최대 ${getNumberString(
                        userInfo.point
                    )} 원 입금 가능`}
                    onChange={onChange}
                />
            </Box>
        </GivingCommon>
    );
};

export default GivingAmountComponent;
