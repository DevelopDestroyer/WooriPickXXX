import { Box, makeStyles, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import http from '../../http';
import { GivingAmountState, GivingSelectState } from '../../recoil/Giving';
import { CurrentAccountState, CurrentUserState } from '../../recoil/Session';
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

    const [givingAmount, setGivingAmount] = useRecoilState(GivingAmountState);
    const givingSelect = useRecoilValue(GivingSelectState);
    const userAccount = useRecoilValue(CurrentAccountState);
    const userInfo = useRecoilValue(CurrentUserState);

    const [open, setOpen] = useState<boolean>(false);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGivingAmount(Number(event.target.value));
    };

    const onClose = async () => {
        await http.post(`/api/trading/donation`, {
            userNickname: userInfo.nickname,
            donationId: givingSelect[0].id,
            donationPoint: givingAmount,
        });
        setOpen(false);
        onMoveClick(index + 1);
    };

    return (
        <GivingCommon
            headerTitle="기부하기"
            isLast={false}
            buttonDisable={!isValid(givingAmount, userAccount.point)}
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
            <FingerDialog open={open} onClose={onClose} />
            <p className="txt_20">기부하고 싶은</p>
            <p className="txt_20 txt_b">금액을 입력하세요.</p>
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
                        userAccount.point
                    )} 원 입금 가능`}
                    onChange={onChange}
                />
            </Box>
        </GivingCommon>
    );
};

export default GivingAmountComponent;
