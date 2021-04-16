import React from 'react';
import { rendingData } from './DataModel';

export interface RenderingPageProps {
    index: number;
    onMoveButtonClick: (index: number, move: number) => void;
}

const SignupAccountComponent: React.FC<RenderingPageProps> = (
    props: RenderingPageProps
) => {
    //rendingData[id];
    if (props.index >= rendingData.length) {
        return <></>;
    }

    return (
        <>
            <div className="toptitle_div bg_wh">
                <div className="container pd_t10">
                    <a href="index.html">
                        <div className="back_div">
                            <img src="/images/ICON_back.png" />
                        </div>
                    </a>

                    <p className="txt_24 txt_b mg_t10">혜택통 만들기</p>
                </div>
            </div>

            <div>
                <div style={{ height: '700px' }} className="container mg_t30">
                    <p className="txt_20 txt_b">이름을 알려주세요.</p>

                    <div className="box_div mg_t20 bg_wh">
                        <div className="pd_t16 mg_l16">
                            <p className="txt_14 txt_gray1">이름</p>
                        </div>
                        <div className="pd_t4 mg_l16 pd_b16">
                            <input
                                type="text"
                                ref={(input) => input?.focus()}
                                className="txt_18"
                            />
                        </div>
                    </div>

                    <a href="0.2_join_2.html">
                        <div className="btn_bottom bg_gray3">
                            <p className="p_btn_bottom txt_wh txt_b">다음</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default SignupAccountComponent;
