import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
    BenefitFavoriteState,
    BenefitStateCompany,
} from '../../recoil/Benefit';
import { BenefitCompany } from './DataModel';
import HomBenefitCompany from './HomBenefitCompany';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: '1.5rem',
        '&:first-child': {
            marginTop: 0,
        },
    },
}));

export interface HomeBenefitListProps {
    categoryId: number;
}

const HomeBenefitList: React.FC<HomeBenefitListProps> = (
    props: HomeBenefitListProps
) => {
    const classes = useStyles();
    const benefitCompany = useRecoilValue(BenefitStateCompany);
    const benefitFavoriteCompany = useRecoilValue(BenefitFavoriteState);
    const [renderValue, setRenderValue] = useState<
        Omit<BenefitCompany, 'userLike'>[]
    >();

    useEffect(() => {
        const filterData = benefitCompany.data.filter((eachData) => {
            return eachData.categoryId === props.categoryId;
        });
        setRenderValue(filterData);
    }, [benefitCompany.data]);

    return (
        <>
            {renderValue?.map((eachData) => {
                return (
                    <Box key={eachData.companyName} className={classes.root}>
                        <HomBenefitCompany
                            companyName={eachData.companyName}
                            categoryId={eachData.categoryId}
                            description={eachData.description}
                            thumbNailPath={eachData.thumbNailPath}
                            totalLike={eachData.totalLike}
                            userLike={
                                !!benefitFavoriteCompany[eachData.companyName]
                            }
                        />
                    </Box>
                );
            })}
        </>
    );
};

export default HomeBenefitList;
