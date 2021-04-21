import { Box, Typography } from '@material-ui/core';
import React from 'react';

export interface HeaderDeafaultProps {
    icon: JSX.Element;
    title: string;
}

const HeaderDeafault: React.FC<HeaderDeafaultProps> = (
    props: HeaderDeafaultProps
) => {
    return (
        <Box>
            <Box m="1rem">
                {props.icon}
                <Typography>{props.title}</Typography>
            </Box>
        </Box>
    );
};

export default HeaderDeafault;
