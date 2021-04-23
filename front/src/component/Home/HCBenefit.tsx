import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import http from '../../http';
import {
    CurrentUserCategoryState,
    CurrentUserState,
} from '../../recoil/Session';
import { getCategoryNameFromId } from '../Common/util';

const useStyles = makeStyles(() => ({
    dfColor: {
        color: 'white',
    },
    buttonLayout: {
        backgroundColor: '#3BAAD8',
        borderRadius: '0.5rem',
        flexBasis: 0,
        flexGrow: 1,
    },
    cardActionLayout: {
        padding: '16px',
        justifyContent: 'flex-end',
    },
}));

interface CategoryIconProps {
    id: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = (
    props: CategoryIconProps
) => {
    return (
        <Box display="flex" flexDirection="column">
            <img
                src="images/Logo.png"
                style={{ width: '3.5rem', height: '3.5rem', margin: 'auto' }}
            />
            <Typography style={{ textAlign: 'center' }}>
                {getCategoryNameFromId(props.id)}
            </Typography>
        </Box>
    );
};

const HCPoint: React.FC = () => {
    const classes = useStyles();
    const userInfo = useRecoilValue(CurrentUserState);
    const [category, setCategory] = useRecoilState(CurrentUserCategoryState);

    const onClick = () => {
        console.log('Click');
    };

    useEffect(() => {
        http.get(`/api/members/${encodeURI(userInfo.nickname)}/category`).then(
            (res) => {
                const resCategory = res.data.data.map(
                    (eachData: any) => eachData.categoryId
                );
                setCategory(resCategory);
            }
        );
    }, [userInfo]);

    if (category.length === 0) {
        return <></>;
    }
    return (
        <Card style={{ borderRadius: '0.5rem' }}>
            <CardHeader title={<Typography>내가 선택한 혜택</Typography>} />
            <CardContent>
                <Box display="flex">
                    {category.map((eachCategory: number) => {
                        return (
                            <Box key={eachCategory} margin="auto">
                                <CategoryIcon id={eachCategory} />
                            </Box>
                        );
                    })}
                </Box>
            </CardContent>
            <CardActions classes={{ root: classes.cardActionLayout }}>
                <Typography onClick={onClick} variant="caption">
                    혜택을 바꾸고 싶나요?
                </Typography>
            </CardActions>
        </Card>
    );
};

export default HCPoint;
