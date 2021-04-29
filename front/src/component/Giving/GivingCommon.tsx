import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderAction from '../Common/HeaderAction';

const useStyles = makeStyles(() => ({
    dfColor: {
        color: 'white',
    },
    buttonLayout: {
        backgroundColor: '#3BAAD8',
        flexBasis: 0,
        flexGrow: 1,
    },
}));

export interface GivingCommonProps {
    headerTitle: string;
    isLast: boolean;
    buttonTitle: string;
    buttonDisable?: boolean;
    onMoveClick: (offset: number) => void;
}

type GivingCommonType = React.PropsWithChildren<GivingCommonProps>;

const GivingCommon: React.FC<GivingCommonType> = (props: GivingCommonType) => {
    return (
        <Box display="flex" flexDirection="column" width="100%">
            <HeaderAction
                isLast={props.isLast}
                headerTitle={props.headerTitle}
                onMoveClick={() => props.onMoveClick(-1)}
            />
            <div className="glow_body">
                <Box mt="30px">
                    <div className="container" style={{ height: '100%' }}>
                        {props.children}
                    </div>
                </Box>
            </div>
            <Button
                disableRipple={props.buttonDisable}
                disabled={props.buttonDisable}
                className={`btn_bottom ${
                    props.buttonDisable ? 'bg_gray3' : 'bg_primaryblue'
                }`}
                onClick={() => props.onMoveClick(1)}
            >
                <p className="p_btn_bottom txt_wh txt_b">{props.buttonTitle}</p>
            </Button>
        </Box>
    );
};

export default GivingCommon;
