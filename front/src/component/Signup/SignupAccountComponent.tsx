import {
    Box,
    Button,
    Dialog,
    IconButton,
    TextField,
    Typography,
} from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SignUpAccNumState } from '../../recoil/Session';
import { SignupComponentProps } from './DataModel';

interface ACDialogProps {
    open: boolean;
    onClose: () => void;
}

const ACDialog: React.FC<ACDialogProps> = (props: ACDialogProps) => {
    const { onClose, open } = props;

    const handleOk = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleOk} open={open}>
            <Box mt="15px" mx="15px">
                <Typography>계좌 인증이 확인 되었습니다.</Typography>
            </Box>
            <Box>
                <Button onClick={handleOk} className="p_btn_bottom txt_b">
                    확인
                </Button>
            </Box>
        </Dialog>
    );
};

const SignupAccountComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    const [account, setAccount] = useRecoilState<string>(SignUpAccNumState);
    const [isCert, setIsCert] = useState<boolean>(false);
    const [tokenStr, setTokenStr] = useState<string>('');

    const [dialog, setDialog] = useState<boolean>(false);
    const [complete, setComplete] = useState<boolean>(false);

    const completeClick = () => {
        setComplete(true);
        setDialog(true);
    };

    const onCertClick = () => {
        setIsCert(!isCert);
    };

    return (
        <div className="bg_gray5">
            <ACDialog
                open={dialog}
                onClose={() => {
                    setDialog(false);
                }}
            />
            <div className="toptitle_div bg_wh">
                <div className="container">
                    <IconButton
                        className="back_div"
                        onClick={() => props.onMoveButtonClick(-1)}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                    <p className="txt_24 txt_b mg_t10">혜택통 만들기</p>
                </div>
            </div>

            <div className="glow_body">
                <div className="container mg_t30">
                    <p className="txt_20 txt_b">
                        본인의 우리은행 계좌번호를 알려주세요.
                    </p>

                    <div className="box_div mg_t20 bg_wh">
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="pd_t16 mg_l16">
                                            <TextField
                                                disabled={isCert || complete}
                                                value={account}
                                                defaultValue={account}
                                                onChange={(event) => {
                                                    setAccount(
                                                        event.target.value
                                                    );
                                                }}
                                                label="계좌번호"
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="pd_t4 mg_l16 pd_b16"></div>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div className="">
                                            <Button
                                                disabled={
                                                    account === '' || complete
                                                }
                                                className="btn_blueBorder"
                                                style={{ marginRight: '16px' }}
                                                onClick={onCertClick}
                                            >
                                                {isCert ? '취소' : '1원 인증'}
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="mg_t30 txt_14 txt_center">
                        계좌 확인을 위해 계좌번호로 1원을 보낼게요
                        <br />
                        입금명을 확인해 주세요
                    </p>

                    <div className="box_div mg_t30 bg_wh">
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="pd_t16 mg_l16">
                                            <TextField
                                                disabled={!isCert || complete}
                                                onChange={(event) => {
                                                    setTokenStr(
                                                        event.target.value
                                                    );
                                                }}
                                                placeholder="혜택통 +"
                                                label="입금명을 입력해주세요"
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="pd_t4 mg_l16 pd_b16"></div>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div className="">
                                            {isCert && (
                                                <Button
                                                    disabled={
                                                        tokenStr === '' ||
                                                        complete
                                                    }
                                                    className="btn_blueBorder"
                                                    style={{
                                                        marginRight: '16px',
                                                    }}
                                                    onClick={completeClick}
                                                >
                                                    입력
                                                </Button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Button
                disabled={!complete}
                disableRipple={!complete}
                className={`btn_bottom ${
                    complete ? 'bg_primaryblue' : 'bg_gray3'
                }`}
                onClick={() => props.onMoveButtonClick(1)}
            >
                <p className="p_btn_bottom txt_wh txt_b">다음</p>
            </Button>
        </div>
    );
};

export default SignupAccountComponent;
