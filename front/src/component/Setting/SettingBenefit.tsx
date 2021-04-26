import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentUserCategoryState } from '../../recoil/Session';
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

const SettingBenefit: React.FC = () => {
    const classes = useStyles();
    const category = useRecoilValue(CurrentUserCategoryState);
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
                <Button
                    className={`${classes.buttonLayout} ${classes.dfColor}`}
                >
                    혜택 바꾸기
                </Button>
            </CardActions>
        </Card>
    );
};

export default SettingBenefit;
