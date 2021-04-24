import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';

export interface HeaderDeafaultProps {
    icon: JSX.Element;
    title: string;
}

type HeaderDefaultType = PropsWithChildren<HeaderDeafaultProps>;

const HeaderDeafault: React.FC<HeaderDefaultType> = (
    props: HeaderDefaultType
) => {
    return (
        <AppBar position="sticky" style={{ backgroundColor: '#fafbfc' }}>
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
            {props.children}
        </AppBar>
    );
};

export default HeaderDeafault;
