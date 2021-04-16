import React from 'react';
import { rendingData } from './DataModel';

export interface RenderingPageProps {
    index: number;
    onMoveButtonClick: (index: number, move: number) => void;
}

const RendingComponent: React.FC<RenderingPageProps> = (
    props: RenderingPageProps
) => {
    //rendingData[id];
    if (props.index >= rendingData.length) {
        return <></>;
    }

    const onNextClick = () => {
        props.onMoveButtonClick(props.index, 1);
    };

    const onBackClick = () => {
        props.onMoveButtonClick(props.index, -1);
    };

    return (
        <div className="container mg_t10" style={{ overflowX: 'visible' }}>
            <div
                className={`back_div ${props.index === 0 ? 'hide' : ''}`}
                onClick={onBackClick}
            >
                <img src="/images/ICON_back.png" />
            </div>
            <div>
                <p className="rd_posi_1 txt_30">
                    {rendingData[props.index].title.first}
                </p>
                <p className="rd_posi_2 txt_30 txt_b">
                    {rendingData[props.index].title.second}
                </p>

                <p className="rd_posi_3 txt_18">
                    {rendingData[props.index].description[0]}
                    <br />
                    {rendingData[props.index].description[1]}
                </p>
                <div
                    className="txt_back_highlight"
                    style={{ width: '276px' }}
                />
                <p className="rd_posi_4 txt_18 txt_b">
                    {rendingData[props.index].highLight}
                </p>
            </div>
            <div className="pd_b30 rd_posi_img">
                <p className="txt_center">
                    <img
                        className="img_rending"
                        src={`/images/rending_${props.index + 1}.png`}
                    />
                </p>
            </div>
            <div className="btn_bottom bg_primaryblue" onClick={onNextClick}>
                <p className="p_btn_bottom txt_wh txt_b">다음</p>
            </div>
        </div>
    );
};

export default RendingComponent;
