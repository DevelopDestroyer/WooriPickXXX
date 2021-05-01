import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { getCategoryNameFromId, getNumberString } from '../Common/util';
import { TransactionSet } from './DataModel';

export interface BenefitListProps {
    data: TransactionSet[];
}

const extractDate = (date: string): string => {
    const c = new Date(date);
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    return `${c.getMonth() + 1}월 ${c.getDate()} (${week[c.getDay()]})`;
};

const BenefitList: React.FC<BenefitListProps> = ({
    data,
}: BenefitListProps) => {
    return (
        <>
            {data.map((eachData, index, arr) => {
                return (
                    <Box key={index} mt={index === 0 ? '0px' : '5px'}>
                        <Typography className={`txt_14`}>
                            {extractDate(eachData.date)}
                        </Typography>
                        <Grid container style={{ marginTop: '5px' }}>
                            <Grid>
                                <Typography className={`txt_16`}>
                                    {eachData.companyName}
                                </Typography>
                            </Grid>
                            <Box flexGrow="1" />

                            <Grid style={{ textAlign: 'right' }}>
                                <Typography className={`txt_16`}>
                                    {getNumberString(eachData.totalBuyPrice)}
                                </Typography>
                                <Typography
                                    className={`txt_14 txt_primaryBlue2`}
                                >{`${getCategoryNameFromId(
                                    eachData.categoryId
                                )} 적립 ${getNumberString(
                                    eachData.point
                                )}`}</Typography>
                            </Grid>
                        </Grid>

                        {arr.length - 1 !== index && (
                            <div className="line bg_gray3 mg_t20" />
                        )}
                    </Box>
                );
            })}
        </>
    );
};

export default BenefitList;
