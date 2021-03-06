import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import http from '../../http';
import { SignUpAccInfoState, SignUpProfileState } from '../../recoil/Session';
import { getMoneyStr2Number } from '../Common/util';
import { SignupAccountInterface, SignupComponentProps } from './DataModel';
import SignupAccountList from './SignupAccountList';
import SignupCommonComponent from './SignupCommon';

const SignupAccountComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    const setAccount = useSetRecoilState(SignUpAccInfoState);
    const signupInfo = useRecoilValue(SignUpProfileState);
    const [isLoaded, setIsLoaded] = useState(false);

    const [wooriAccountList, setWooriAccountList] = useState<
        SignupAccountInterface[]
    >([]);

    const [selectAccount, setSelectAccount] = useState<
        SignupAccountInterface[]
    >([]);

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
                setIsLoaded(true);
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
                <p className="txt_20">?????? ?????? ???????????? ?????? 1??????</p>
                <p className="txt_20 txt_b">??????????????????.</p>
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    ???????????? ??????
                </p>
                &nbsp;
                <p
                    className="txt_18 txt_b txt_line"
                    style={{ color: '#3BAAD8' }}
                >
                    20???
                </p>
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    ???
                </p>
                &nbsp;
                <p
                    className="txt_18 txt_b txt_line"
                    style={{ color: '#3BAAD8' }}
                >
                    2,900??????
                </p>
                <br />
                &nbsp;
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    ?????? ???????????? ?????? ???????????????.
                </p>
                <br />
                <br />
                <p
                    className="txt_18 txt_b txt_line"
                    style={{ color: '#3BAAD8' }}
                >
                    ?????? ?????? ?????? ???
                </p>
                &nbsp;
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    ????????? ???????????? ??? ?????????!
                </p>
                <div className="box_div mg_t20">
                    <SignupAccountList
                        isLoaded={isLoaded}
                        onChange={onChange}
                        originData={wooriAccountList}
                        selectedData={selectAccount}
                    />
                </div>
            </SignupCommonComponent>
        </div>
    );
};

export default SignupAccountComponent;
