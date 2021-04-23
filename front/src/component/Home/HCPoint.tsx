import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import http from '../../http';
import {
    CurrentUserCategoryState,
    CurrentUserState,
    CurrentUserTransactionState,
} from '../../recoil/Session';
import BenefitList from './BenefitList';
import { DummyTransactionData, TransactionSet } from './DataModel';

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
    },
}));

const DISPLAY_COUNT = 3;

const HCPoint: React.FC = () => {
    const classes = useStyles();
    const userInfo = useRecoilValue(CurrentUserState);
    const userCategory = useRecoilValue(CurrentUserCategoryState);
    const [transaction, setTransaction] = useRecoilState(
        CurrentUserTransactionState
    );
    const [displaySet, setDisplaySet] = useState<TransactionSet[]>([]);

    useEffect(() => {
        http.get(`/api/trading/benefits/${encodeURI(userInfo.nickname)}`).then(
            (res) => {
                let data: TransactionSet[] = [];
                if (res.data.data.length === 0) {
                    data = DummyTransactionData;
                } else {
                    data = res.data.data;
                }
                data = data.filter((eachData) => {
                    return userCategory.includes(eachData.categoryId);
                });
                setDisplaySet(data.slice(0, DISPLAY_COUNT));
                setTransaction(data);
            }
        );
    }, [userCategory]);

    if (displaySet.length === 0) {
        return <></>;
    }
    return (
        <Card style={{ borderRadius: '0.5rem' }}>
            <CardHeader title={<Typography>혜택 적립 내역</Typography>} />
            <CardContent>
                <BenefitList data={displaySet} />
            </CardContent>
            {transaction.length > DISPLAY_COUNT && (
                <CardActions classes={{ root: classes.cardActionLayout }}>
                    <Button
                        className={`${classes.buttonLayout} ${classes.dfColor}`}
                    >
                        이용 내역 더 보기
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default HCPoint;
