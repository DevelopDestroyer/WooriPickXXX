import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { DonationCategory } from './DataModel';

interface GivingComponentDonationPieProps {
    donationStatus: DonationCategory[];
}

const COLOR_SET = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(246,219,111,0.2)',
    'rgb(168,109,103)',
];

const GivingComponentDonationPie: React.FC<GivingComponentDonationPieProps> = ({
    donationStatus,
}: GivingComponentDonationPieProps) => {
    const sortData = donationStatus
        .filter((data) => data.totalDonationCount !== 0)
        .sort((d1, d2) => {
            console.log(d1);
            console.log(d2);
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
            },
        },
    };

    sortData.forEach((eachData, index) => {
        data.labels.push(
            /*getCategoryNameFromId(eachData.donationId)*/ `테스트${index}`
        );
        data.datasets[0].data.push(eachData.totalDonationCount);
        data.datasets[0].backgroundColor.push(COLOR_SET[index]);
        data.datasets[0].borderColor.push('#00000000');
    });
    console.log(data);
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
