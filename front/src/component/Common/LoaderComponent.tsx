import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

export interface LoaderComponentProps {
    color: string;
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({
    color,
}: LoaderComponentProps) => {
    return (
        <Box
            height="124px"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress style={{ color: color }} />
        </Box>
    );
};

export default LoaderComponent;
