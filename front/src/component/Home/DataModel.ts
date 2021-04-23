export interface TransactionSet {
    companyName: string;
    categoryId: number;
    totalBuyPrice: number;
    point: number;
    date: string;
}

export const DummyTransactionData: TransactionSet[] = [
    {
        date: '2021-04-08',
        companyName: '연화바루',
        totalBuyPrice: -32000,
        categoryId: 101,
        point: 1600,
    },
    {
        date: '2021-04-07',
        companyName: '지구샵',
        totalBuyPrice: -12000,
        categoryId: 102,
        point: 600,
    },
    {
        date: '2021-04-07',
        companyName: '테스트1',
        totalBuyPrice: -37000,
        categoryId: 104,
        point: 3600,
    },
    {
        date: '2021-04-06',
        companyName: '테스트2',
        totalBuyPrice: -1200,
        categoryId: 101,
        point: 60,
    },
    {
        date: '2021-04-06',
        companyName: '지구샵',
        totalBuyPrice: -1000,
        categoryId: 101,
        point: 10,
    },
];
