import {
    Box,
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { COLOR_SET, DonationMember } from './DataModel';

const useStyles = makeStyles(() => ({
    text: {
        display: 'inline-block',
        maxWidth: '55px',
        minWidth: '50px',
        whiteSpace: 'nowrap',
        textAlign: 'right',
        overflow: 'hidden !important',
        textOverflow: 'ellipsis',
    },
    money: {
        position: 'relative',
        display: 'inline-block',
        fontFamily: "'Recursive', sans-serif",
        fontSize: '17px',
    },
}));

const MAX_SHOW_MEMBER = 8;

interface GivingComponentDonationMemberProps {
    donationMember: DonationMember[];
}

const getOrderMember = (donationMember: DonationMember[]) => {
    return donationMember
        .slice()
        .sort((d1, d2) => {
            return d2.point - d1.point;
        })
        .slice(0, MAX_SHOW_MEMBER);
};

const getRage = (sortMemger: DonationMember[]): [number, number] => {
    const maxValueLen = sortMemger[0].point;
    const minValueLen = sortMemger[sortMemger.length - 1].point;

    if (sortMemger.length >= 1) {
        const max = maxValueLen * 1.1;
        const min = minValueLen * 0.9;
        return [min, max];
    } else {
        return [0, 0];
    }
};

const GivingComponentDonationMember: React.FC<GivingComponentDonationMemberProps> = ({
    donationMember,
}: GivingComponentDonationMemberProps) => {
    const classes = useStyles();
    const orderMember = getOrderMember(donationMember);
    const [start, end] = getRage(orderMember);
    return (
        <Card
            style={{
                borderRadius: '0.5rem',
            }}
        >
            <CardContent>
                <Typography className="txt_b txt_20">
                    지난 달 기부왕👍
                </Typography>
                <Box>
                    <Grid>
                        {orderMember.map((eachMember, index) => {
                            return (
                                <Box
                                    display="flex"
                                    key={eachMember.nickname}
                                    my="1.5rem"
                                >
                                    <Box
                                        width="1.5rem"
                                        height="2rem"
                                        position="relative"
                                    >
                                        {index <= 2 && (
                                            <img
                                                src={`/images/ICON_ranking${
                                                    index + 1
                                                }.png`}
                                            />
                                        )}
                                    </Box>
                                    <Box flexGrow="1" ml="0.5rem">
                                        <Box
                                            mt="0.3rem"
                                            height="40%"
                                            width={`${
                                                (eachMember.point /
                                                    (end - start)) *
                                                100
                                            }%`}
                                            style={{
                                                backgroundColor:
                                                    COLOR_SET[
                                                        index >= 5 ? 4 : index
                                                    ],
                                            }}
                                        />
                                        <Typography className={classes.money}>
                                            {eachMember.point}원
                                        </Typography>
                                    </Box>
                                    <Typography className={classes.text}>
                                        {eachMember.nickname}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default GivingComponentDonationMember;
