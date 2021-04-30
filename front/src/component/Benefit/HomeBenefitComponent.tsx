import { Box, Tab, Tabs } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import React, { ChangeEvent, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import http from '../../http';
import {
    BenefitFavoriteState,
    BenefitSlideNumber,
    BenefitStateCompany,
} from '../../recoil/Benefit';
import { BenefitSearch, CurrentUserState } from '../../recoil/Session';
import { CategoryStandInfo } from '../Category/DataModel';
import HeaderDeafault from '../Common/HeaderDefault';
import { a11yProps } from '../Common/util';
import {
    BenefitCompany,
    BenefitCompanyRes,
    BenefitFavoriteCompany,
} from './DataModel';
import HomeBenefitInputText from './HomeBenefitInputText';
import HomeBenefitSearchList from './HomeBenefitSearchList';
import HomeBenefitSlider from './HomeBenefitSlider';

const HomeBenefitComponent: React.FC = () => {
    const userInfo = useRecoilValue(CurrentUserState);

    const [searchText, setSearchText] = useRecoilState(BenefitSearch);
    const [benefitCompany, setBenefitCompany] = useRecoilState(
        BenefitStateCompany
    );
    const setFavoriteState = useSetRecoilState(BenefitFavoriteState);

    useEffect(() => {
        if (benefitCompany.isLoaded) {
            return;
        }

        http.get(`/api/${encodeURI(userInfo.nickname)}/company`).then((res) => {
            const isertArr: BenefitCompanyRes = {
                isLoaded: true,
                data: [],
            };
            const benefitData: BenefitFavoriteCompany = {};
            res.data.data.forEach((eachData: BenefitCompany) => {
                isertArr.data.push({
                    categoryId: eachData.categoryId,
                    companyName: eachData.companyName,
                    description: eachData.description,
                    thumbNailPath: eachData.thumbNailPath
                        .replace(/\/\//gi, '/')
                        .replace(/\.[^/.]+$/, '.png'),
                    totalLike: eachData.totalLike,
                });
                benefitData[eachData.companyName] = eachData.userLike;
            });

            setBenefitCompany(isertArr);
            setTimeout(() => {
                setFavoriteState(benefitData);
            }, 100);
        });
    }, []);

    const onChange = (value: string) => {
        setSearchText(value);
    };

    const [page, setPage] = useRecoilState(BenefitSlideNumber);

    const tabChange = (event: ChangeEvent<any>, nextValue: number) => {
        console.log(`Tab Change Called ${nextValue}`);
        setPage(nextValue);
    };

    const isSearchMode = searchText.length !== 0;

    return (
        <>
            <HeaderDeafault icon={<StorefrontIcon />} title="혜택 찾기">
                <HomeBenefitInputText
                    inputText={searchText}
                    onChange={onChange}
                />
                {!isSearchMode && (
                    <Tabs
                        value={page}
                        onChange={tabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {CategoryStandInfo.map((eachData, index) => {
                            return (
                                <Tab
                                    key={index}
                                    label={eachData.name}
                                    {...a11yProps(index)}
                                />
                            );
                        })}
                    </Tabs>
                )}
            </HeaderDeafault>
            {isSearchMode ? (
                <Box p={3}>
                    <HomeBenefitSearchList searchText={searchText} />
                </Box>
            ) : (
                <HomeBenefitSlider />
            )}
        </>
    );
};

export default HomeBenefitComponent;
