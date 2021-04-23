import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

const Loading: React.FC = () => {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: '100%' }}
        >
            <CircularProgress
                style={{
                    height: '4rem',
                    width: '4rem',
                    color: '#62C3EB',
                }}
            />
        </Grid>
    );
};

export default Loading;
