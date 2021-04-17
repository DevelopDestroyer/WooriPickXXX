import { Button, IconButton, TextField } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React from 'react';
import { rendingData } from './DataModel';

export interface RenderingPageProps {
    index: number;
    defaultValue: string;
    onMoveButtonClick: (index: number, move: number) => void;
    onInpuChange: (index: number, data: string) => void;
}

const SignupProfileComponent: React.FC<RenderingPageProps> = (
    props: RenderingPageProps
) => {
    //rendingData[id];
    if (props.index >= rendingData.length) {
        return <></>;
    }
    console.log(`SignupProfile Called ${props.defaultValue}`);

    const buttonDisable = props.defaultValue === '';
    return (
        <div className="bg_gray5">
            <div className="toptitle_div bg_wh">
                <div className="container pd_t10">
                    <IconButton
                        className="back_div"
                        onClick={() => props.onMoveButtonClick(props.index, -1)}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                    <p className="txt_24 txt_b mg_t10">혜택통 만들기</p>
                </div>
            </div>

            <div>
                <div style={{ height: '700px' }} className="container mg_t30">
                    <p className="txt_20 txt_b">
                        {rendingData[props.index].title}
                    </p>

                    <div className="box_div mg_t20 bg_wh">
                        <div className="pd_t16 mg_l16"></div>
                        <div className="pd_t4 mg_l16 pd_b16">
                            <TextField
                                value={props.defaultValue}
                                onChange={(event) =>
                                    props.onInpuChange(
                                        props.index,
                                        event.target.value
                                    )
                                }
                                id="outlined-basic"
                                label={rendingData[props.index].description}
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <Button
                        disableRipple={buttonDisable}
                        disabled={buttonDisable}
                        onClick={() => {
                            props.onMoveButtonClick(props.index, 1);
                        }}
                        className={`btn_bottom ${
                            buttonDisable ? 'bg_gray3' : 'bg_primaryblue'
                        }`}
                    >
                        <p className="p_btn_bottom txt_wh txt_b">다음</p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignupProfileComponent;
