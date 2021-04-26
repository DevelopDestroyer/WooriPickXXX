import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { getCategoryImgPath, getCategoryNameFromId } from './util';

export interface CategoryIconProps {
    id: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = (
    props: CategoryIconProps
) => {
    return (
        <Box display="flex" flexDirection="column">
            <img
                src={getCategoryImgPath(props.id)}
                style={{ width: '3.5rem', height: '3.5rem', margin: 'auto' }}
            />
            <Typography style={{ textAlign: 'center' }}>
                {getCategoryNameFromId(props.id)}
            </Typography>
        </Box>
    );
};

export default CategoryIcon;
