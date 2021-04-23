import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export interface HeaderDeafaultProps {
    icon: JSX.Element;
    title: string;
}

const HeaderDeafault: React.FC<HeaderDeafaultProps> = (
    props: HeaderDeafaultProps
) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                {props.icon}
                <Box ml="0.5rem">
                    <Typography
                        style={{
                            fontWeight: 'bold',
                            fontSize: '1.3rem',
                        }}
                    >
                        {props.title}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderDeafault;
