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
            });
            setIsLoaded(true);
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
                <p className="txt_20">보유 중인 우리은행 계좌 1개를</p>
                <p className="txt_20 txt_b">선택해주세요.</p>
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    구독료가 매월
                </p>
                &nbsp;
                <p
                    className="txt_18 txt_b txt_line"
                    style={{ color: '#3BAAD8' }}
                >
                    20일
                </p>
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    에
                </p>
                &nbsp;
                <p
                    className="txt_18 txt_b txt_line"
                    style={{ color: '#3BAAD8' }}
                >
                    2,900원씩
                </p>
                <br />
                &nbsp;
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    해당 계좌에서 빠질 예정입니다.
                </p>
                <br />
                <br />
                <p
                    className="txt_18 txt_b txt_line"
                    style={{ color: '#3BAAD8' }}
                >
                    첫달 무료 이용 후
                </p>
                &nbsp;
                <p className="txt_14 txt_line" style={{ color: '#3BAAD8' }}>
                    언제든 해지하실 수 있어요!
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
