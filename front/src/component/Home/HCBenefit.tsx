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
import CategoryIcon from '../Common/CategoryIcon';

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
    console.log(category);
    return (
        <Card style={{ borderRadius: '0.5rem' }}>
            <CardHeader
                title={
                    <Typography className="txt_20 txt_b">
                        내가 선택한 혜택
                    </Typography>
                }
            />
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
