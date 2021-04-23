import {
    AppBar,
    Box,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(() => ({
    defaultType: {
        fontFamily: '"Noto Sans KR", sans-serif',
    },
    selectedType: {
        color: '#62c3eb',
    },
}));

export interface HeaderActionProps {
    isLast: boolean;
    headerTitle: string;
}

const HeaderAction: React.FC<HeaderActionProps> = (
    props: HeaderActionProps
) => {
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton className="back_div" disabled={props.isLast}>
                    <KeyboardArrowLeft
                        style={{
                            display: `${props.isLast ? 'none' : 'block'}`,
                        }}
                    />
                </IconButton>
            </Toolbar>
            <Box ml="16px" mb="10px">
                <Typography className="txt_24 txt_b mg_t10">
                    {props.headerTitle}
                </Typography>
            </Box>
        </AppBar>
    );
};

export default HeaderAction;
