import {
    AppBar,
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
    onMoveClick: () => void;
}

const HeaderAction: React.FC<HeaderActionProps> = (
    props: HeaderActionProps
) => {
    return (
        <AppBar position="sticky">
            <Toolbar style={{ alignItems: 'center' }}>
                {!props.isLast && (
                    <IconButton
                        onClick={props.onMoveClick}
                        className="back_div"
                    >
                        <KeyboardArrowLeft
                            style={{
                                display: 'block',
                            }}
                        />
                    </IconButton>
                )}

                <Typography className="txt_24 txt_b">
                    {props.headerTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderAction;
