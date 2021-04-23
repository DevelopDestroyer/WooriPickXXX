import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { getGivingNameFromId } from '../Common/util';
import { COLOR_SET, DonationCategory } from './DataModel';

interface GivingComponentDonationPieProps {
    donationStatus: DonationCategory[];
}

const GivingComponentDonationPie: React.FC<GivingComponentDonationPieProps> = ({
    donationStatus,
}: GivingComponentDonationPieProps) => {
    const sortData = donationStatus
        .filter((data) => data.totalDonationCount !== 0)
        .sort((d1, d2) => {
            return d2.totalDonationCount - d1.totalDonationCount;
        });

    const data = {
        labels: new Array<string>(),
        datasets: [
            {
                data: new Array<number>(),
                backgroundColor: new Array<string>(),
                borderColor: new Array<string>(),
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    fontSize: 12,
                    boxWidth: 12,
                    usePointStyle: true,
                },
                onClick: null,
            },
        },
        animation: {
            duration: 0,
        },
    };

    sortData.forEach((eachData, index) => {
        data.labels.push(getGivingNameFromId(eachData.donationId));
        data.datasets[0].data.push(eachData.totalDonationCount);
        data.datasets[0].backgroundColor.push(COLOR_SET[index]);
        data.datasets[0].borderColor.push('#00000000');
    });

    return (
        <Card
            style={{
                borderRadius: '0.5rem',
            }}
        >
            <CardContent>
                <Typography className="txt_b txt_20">기부 현황</Typography>
                <Box mt="1rem">
                    <Pie
                        width={250}
                        height={160}
                        options={options}
                        type="pie"
                        data={data}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default GivingComponentDonationPie;
