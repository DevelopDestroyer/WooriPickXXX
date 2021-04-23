import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderAction, { HeaderActionProps } from '../Common/HeaderAction';

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
    header: HeaderActionProps;
    buttonTitle: string;
}

type GivingCommonType = React.PropsWithChildren<GivingCommonProps>;

const GivingCommon: React.FC<GivingCommonType> = (props: GivingCommonType) => {
    return (
        <Box display="flex" flexDirection="column" width="100%">
            <HeaderAction {...props.header} />
            <div className="glow_body">
                <div className="container mg_t30" style={{ height: '100%' }}>
                    {props.children}
                </div>
            </div>
            <Button className={`btn_bottom bg_primaryblue`}>
                <p className="p_btn_bottom txt_wh txt_b">{props.buttonTitle}</p>
            </Button>
        </Box>
    );
};

export default GivingCommon;
