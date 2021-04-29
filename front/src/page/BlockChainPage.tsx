import { Box, Fab, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import BlockChainTop from '../component/Block/BlockChainTop';
import BlockChainTower from '../component/Block/BlockChainTower';
import HeaderAction from '../component/Common/HeaderAction';
import LoaderComponent from '../component/Common/LoaderComponent';
import { BlockChainTotalSet, ChainAPIRes } from '../component/Giving/DataModel';
import http from '../http';
import { BlockChainState } from '../recoil/Giving';
import { CurrentUserState } from '../recoil/Session';

export enum CHAIN_TYPE {
    ENV = 201,
    ANIMAL = 202,
    CHILD = 203,
    DISABLE = 204,
    RELEIF = 205,
}

const useStyles = makeStyles(() => ({
    iconButton: {
        maxWidth: '5rem',
        maxHeight: '5rem',
    },
    text: {
        marginTop: '5px',
    },
}));

const getColor = (data: CHAIN_TYPE) => {
    switch (data) {
        case CHAIN_TYPE.ANIMAL:
            return '#E5B88A';
        case CHAIN_TYPE.CHILD:
            return '#C9AFC7';
        case CHAIN_TYPE.DISABLE:
            return '#98B5D8';
        case CHAIN_TYPE.ENV:
            return '#BFD0A3';
        case CHAIN_TYPE.RELEIF:
            return '#DE6C6C';
    }
    return '';
};

const getImageName = (data: CHAIN_TYPE) => {
    switch (data) {
        case CHAIN_TYPE.ANIMAL:
            return 'Animal.png';
        case CHAIN_TYPE.CHILD:
            return 'Children.png';
        case CHAIN_TYPE.DISABLE:
            return 'Disabled.png';
        case CHAIN_TYPE.ENV:
            return 'Environment.png';
        case CHAIN_TYPE.RELEIF:
            return 'Relief.png';
    }
    return '';
};

const getTitle = (data: CHAIN_TYPE) => {
    switch (data) {
        case CHAIN_TYPE.ANIMAL:
            return '동물보호';
        case CHAIN_TYPE.CHILD:
            return '아동/노인 복지';
        case CHAIN_TYPE.DISABLE:
            return '장애인 복지';
        case CHAIN_TYPE.ENV:
            return '친환경';
        case CHAIN_TYPE.RELEIF:
            return '구호물품';
    }
    return '';
};

const BlockChainPage: React.FC = () => {
    const { type } = useParams<any>();
    const donaionId: number = type * 1;
    const userInfo = useRecoilValue(CurrentUserState);
    const titleName = getTitle(donaionId);
    const imageName = getImageName(donaionId);
    const colorSet = getColor(donaionId);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chainData, setChainData] = useRecoilState(BlockChainState);
    const history = useHistory();

    useEffect(() => {
        http.get('/api/blocks').then((res) => {
            console.log(res.data);
            const insertValue: BlockChainTotalSet = {};
            res.data.forEach((eachData: ChainAPIRes) => {
                const dataArr: string[] = eachData.data.split(';');
                const givingTarget: number = Number(dataArr[3]).valueOf();
                if (!insertValue[givingTarget]) {
                    insertValue[givingTarget] = [];
                }
                console.log(dataArr);
                insertValue[givingTarget].push({
                    donationAmount: Number(dataArr[2]),
                    givingTarget: dataArr[1],
                    hash: eachData.hash,
                    name: dataArr[0],
                    nonce: eachData.nonce,
                    previousHash: eachData.previousHash,
                    target: eachData.target,
                    targetDepth: eachData.targetDepth,
                    timeStamp: eachData.timeStamp,
                    timeString: dataArr[4],
                });
            });
            setIsLoaded(true);
            setChainData(insertValue);
        });
    }, []);

    const [showMy, setShowMy] = useState(false);
    const onShow = () => {
        setShowMy(!showMy);
    };
    const goBackFunciton = () => {
        setShowMy(false);
        history.goBack();
    };

    const currentData = chainData[type * 1] || [];
    let total = 0;

    currentData.forEach((eachData) => {
        total += eachData.donationAmount;
    });

    return (
        <div className="bg_gray5">
            <HeaderAction
                isLast={false}
                headerTitle={titleName}
                onMoveClick={goBackFunciton}
            />

            {isLoaded ? (
                <Box className="container">
                    <Box mt="30px">
                        <BlockChainTop
                            title={titleName}
                            total={total}
                            floorCount={currentData.length}
                        />
                    </Box>
                    <Box>
                        <BlockChainTower
                            showMy={showMy}
                            colorSet={colorSet}
                            donationId={donaionId}
                            currentData={currentData}
                            imageName={imageName}
                            nickName={userInfo.nickname}
                            titleName={titleName}
                        />
                    </Box>
                </Box>
            ) : (
                <LoaderComponent color={'#62C3EB'} />
            )}

            <Fab
                variant="extended"
                size="medium"
                onClick={onShow}
                style={{
                    backgroundColor: 'white',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    position: 'absolute',
                    bottom: '15px',
                }}
            >
                <Typography className="txt_primaryBlue">
                    {showMy ? '전부 보이기' : '내 블록만 보기'}
                </Typography>
            </Fab>
        </div>
    );
};

export default BlockChainPage;
