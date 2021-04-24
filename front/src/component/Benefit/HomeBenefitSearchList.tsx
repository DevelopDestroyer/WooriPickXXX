import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
    BenefitFavoriteState,
    BenefitStateCompany,
} from '../../recoil/Benefit';
import { getCategoryNameFromId } from '../Common/util';
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

export interface HomeBenefitSearchListProps {
    searchText: string;
}

const HomeBenefitSearchList: React.FC<HomeBenefitSearchListProps> = ({
    searchText,
}: HomeBenefitSearchListProps) => {
    const classes = useStyles();
    const benefitCompany = useRecoilValue(BenefitStateCompany);
    const benefitFavoriteCompany = useRecoilValue(BenefitFavoriteState);
    const [renderValue, setRenderValue] = useState<
        Omit<BenefitCompany, 'userLike'>[]
    >();

    useEffect(() => {
        const filterData = benefitCompany.data.filter((eachData) => {
            const categoryName = getCategoryNameFromId(eachData.categoryId);
            console.log(
                `Current Category Name ${categoryName} ${eachData.companyName} ${searchText}`
            );
            return (
                categoryName.includes(searchText) ||
                eachData.companyName.includes(searchText)
            );
        });
        setRenderValue(filterData);
    }, [searchText]);

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

export default HomeBenefitSearchList;
