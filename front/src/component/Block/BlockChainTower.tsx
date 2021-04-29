import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { BlockChainDataSet } from '../Giving/DataModel';
import BlockChainComponent from './BlockChainComponent';

export enum CHAIN_TYPE {
    ENV = 201,
    ANIMAL = 202,
    CHILD = 203,
    DISABLE = 204,
    RELEIF = 205,
}

export interface BlockChainTowerProps {
    imageName: string;
    titleName: string;
    colorSet: string;
    nickName: string;
    donationId: number;
    showMy: boolean;
    currentData: BlockChainDataSet[];
}

const showLogic = (showMy: boolean, isMine: boolean): string => {
    if (showMy) {
        return isMine ? 'block' : 'none';
    } else {
        return 'block';
    }
};

const BlockChainTower: React.FC<BlockChainTowerProps> = (
    props: BlockChainTowerProps
) => {
    const {
        showMy,
        nickName,
        imageName,
        titleName,
        colorSet,
        currentData,
        donationId,
    } = props;
    return (
        <>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '84px',
                    backgroundSize: '100% 100%',
                    backgroundImage: `url(/images/Roof_${imageName})`,
                }}
            >
                <Box pt="15px">
                    <Typography className="txt_wh txt_b txt_20">
                        {titleName}
                    </Typography>
                </Box>
            </Box>
            <Box bgcolor={colorSet} p="15px">
                {currentData.map((eachData, index, arr) => {
                    const isMine = nickName === eachData.name;
                    return (
                        <Box
                            style={{
                                display: showLogic(showMy, isMine),
                            }}
                            key={index}
                            mt={`${index === 0 ? '0' : '15px'}`}
                        >
                            <BlockChainComponent
                                {...eachData}
                                isMine={isMine}
                                donationId={donationId}
                                floor={arr.length - index}
                            />
                        </Box>
                    );
                })}
            </Box>
            <Box>
                <img src={`/images/floor_${imageName}`} />
            </Box>
        </>
    );
};

export default BlockChainTower;
