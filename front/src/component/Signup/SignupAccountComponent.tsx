import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import http from '../../http';
import { SignUpAccInfoState, SignUpProfileState } from '../../recoil/Session';
import { getMoneyStr2Number, getNumberString } from '../Common/util';
import { SignupAccountInterface, SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

const useStyles = makeStyles({
    labelLayout: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingTop: 0,
        marginLeft: '5px',
    },
    icon: {
        color: '#62C3EB',
        fontSize: '1.5rem',
    },
});

const AccountComponent: React.FC<SignupAccountInterface> = (
    props: SignupAccountInterface
) => {
    return (
        <Box display="flex" flexDirection="column">
            <Grid>
                <Typography>계좌번호: {props.ACNO}</Typography>
            </Grid>
            <Grid>
                <Typography>
                    잔액: {getNumberString(getMoneyStr2Number(props.PBOK_BAL))}
                </Typography>
            </Grid>
        </Box>
    );
};

const SignupAccountComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    const classes = useStyles();

    const setAccount = useSetRecoilState(SignUpAccInfoState);
    const signupInfo = useRecoilValue(SignUpProfileState);

    const [wooriAccountList, setWooriAccountList] = useState<
        SignupAccountInterface[]
    >([]);

    const [selectAccount, setSelectAccount] = useState<
        SignupAccountInterface[]
    >([]);

    console.log('Account Called');
    console.log(props.checkCurrent);
    useEffect(() => {
        if (props.checkCurrent) {
            let regex = /(\d{3})(\d{3})(\d{4})/;
            if (signupInfo.cellNumber.length === 11) {
                regex = /(\d{3})(\d{4})(\d{4})/;
            }
            const cellFormat = signupInfo.cellNumber.replace(regex, '$1-$2-$3');
            http.get(
                `/api/wooribank/userPhoneNumber/${encodeURI(
                    cellFormat
                )}/accounts`
            ).then((res) => {
                const data: SignupAccountInterface[] = (res.data.dataBody
                    .GRID as SignupAccountInterface[]).filter((eachData) => {
                    return eachData.ACCT_KND.toUpperCase() === 'P';
                });
                setWooriAccountList(data);
            });
        }
    }, [props.checkCurrent]);

    const onChange = (
        data: SignupAccountInterface,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        if (event.currentTarget.checked) {
            setSelectAccount([data]);
            setAccount({
                accountNumber: data.ACNO,
                accountMoney: getMoneyStr2Number(data.PBOK_BAL),
            });
        } else {
            setSelectAccount([]);
        }
    };

    console.log(selectAccount);
    return (
        <div className="bg_gray5">
            <SignupCommonComponent
                buttonDisable={selectAccount.length === 0}
                onMoveButtonClick={props.onMoveButtonClick}
            >
                <p className="txt_20 txt_b">
                    결재하실 계좌번호를 선택해 주세요.
                </p>

                <div className="box_div mg_t20 bg_wh">
                    {wooriAccountList.map((eachData) => {
                        return (
                            <div
                                key={eachData.ACNO}
                                className="box_div mg_t20 bg_wh height_80"
                            >
                                <FormControlLabel
                                    style={{ display: 'flex' }}
                                    className="checkbox__label pd_l20"
                                    control={
                                        <Checkbox
                                            checkedIcon={
                                                <CheckCircleOutlineIcon
                                                    className={classes.icon}
                                                />
                                            }
                                            icon={
                                                <RadioButtonUncheckedIcon
                                                    className={classes.icon}
                                                />
                                            }
                                            color="primary"
                                            checked={
                                                selectAccount.findIndex(
                                                    (select) =>
                                                        select.ACNO ===
                                                        eachData.ACNO
                                                ) >= 0
                                            }
                                            onChange={(event) =>
                                                onChange(eachData, event)
                                            }
                                        />
                                    }
                                    classes={{ root: classes.labelLayout }}
                                    label={<AccountComponent {...eachData} />}
                                />
                            </div>
                        );
                    })}
                </div>
            </SignupCommonComponent>
        </div>
    );
};

export default SignupAccountComponent;
