import { Box, Button, IconButton, Typography } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React from 'react';
import { RenderComponentInterface } from './DataModel';

interface RenderingPageProps {
    data: RenderComponentInterface;
    onMoveButtonClick: (move: number) => void;
}

type PropsType = RenderingPageProps & { isFirst: boolean };

const RendingComponent: React.FC<PropsType> = ({
    data,
    ...props
}: PropsType) => {
    const onNextClick = () => {
        props.onMoveButtonClick(1);
    };

    const onBackClick = () => {
        props.onMoveButtonClick(-1);
    };

    return (
        <Box style={{ position: 'relative' }} width="100%" height="100%">
            <div className="container mg_t10" style={{ overflowX: 'visible' }}>
                <IconButton
                    className={`back_div ${props.isFirst && 'hide'}`}
                    onClick={onBackClick}
                >
                    <KeyboardArrowLeft />
                </IconButton>
            </div>
            <div>
                <p className="rd_posi_1 txt_30">{data.title.first}</p>
                <p className="rd_posi_2 txt_30 txt_b">{data.title.second}</p>

                <p className="rd_posi_3 txt_18">
                    {data.description[0]}
                    <br />
                    {data.description[1]}
                </p>
                <div
                    className="txt_back_highlight"
                    style={{ width: '276px' }}
                />
                <p className="rd_posi_4 txt_18 txt_b">{data.highLight}</p>
            </div>
            <div className="pd_b30 rd_posi_img">
                <p className="txt_center">
                    <img className="img_rending" src={data.imgPath} />
                </p>
            </div>
            <Button className="btn_bottom bg_primaryblue" onClick={onNextClick}>
                <Typography className="p_btn_bottom txt_wh txt_b">
                    다음
                </Typography>
            </Button>
        </Box>
    );
};

export default RendingComponent;
