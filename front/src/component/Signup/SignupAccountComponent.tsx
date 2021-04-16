import React from 'react';

export interface RenderingPageProps {
    onBackClick: () => void;
    onNextClick: () => void;
}

const SignupAccountComponent: React.FC<RenderingPageProps> = (
    props: RenderingPageProps
) => {
    return (
        <div className="bg_gray5">
            <div className="toptitle_div bg_wh">
                <div className="container pd_t10">
                    <div className="back_div" onClick={props.onBackClick}>
                        <img src="/images/ICON_back.png" />
                    </div>

                    <p className="txt_24 txt_b mg_t10">혜택통 만들기</p>
                </div>
            </div>

            <div>
                <div style={{ height: '700px' }} className="container mg_t30">
                    <p className="txt_20 txt_b">
                        본인의 우리은행 계좌번호를 알려주세요.
                    </p>

                    <div className="box_div mg_t20 bg_wh">
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="pd_t16 mg_l16">
                                            <p className="txt_14 txt_gray1">
                                                계좌번호
                                            </p>
                                        </div>
                                        <div className="pd_t4 mg_l16 pd_b16">
                                            <input
                                                type="tel"
                                                ref={(input) => input?.focus()}
                                                className="txt_18"
                                            />
                                        </div>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div className="">
                                            <button
                                                className="btn_blueBorder"
                                                style={{ marginRight: '16px' }}
                                            >
                                                1원 인증
                                            </button>
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
                                            <p className="txt_14 txt_gray1">
                                                입금명을 입력해주세요
                                            </p>
                                        </div>
                                        <div className="pd_t4 mg_l16 pd_b16">
                                            <input
                                                type="tel"
                                                ref={(input) => input?.focus()}
                                                className="txt_18"
                                            />
                                        </div>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <div className="">
                                            <button
                                                className="btn_blueBorder"
                                                style={{ marginRight: '16px' }}
                                            >
                                                입력
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <a href="0.2_join_5.html">
                        <div className="btn_bottom bg_gray3">
                            <p className="p_btn_bottom txt_wh txt_b">다음</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignupAccountComponent;
