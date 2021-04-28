import { Box, Fab, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import BlockChainComponent from '../component/Block/BlockChainComponent';
import HeaderAction from '../component/Common/HeaderAction';
import { getNumberString } from '../component/Common/util';
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
    const userInfo = useRecoilValue(CurrentUserState);
    const titleName = getTitle(type * 1);
    const imageName = getImageName(type * 1);
    const colorSet = getColor(type * 1);
    const history = useHistory();

    const [showMy, setShowMy] = useState(false);
    const onShow = () => {
        setShowMy(!showMy);
    };
    const goBackFunciton = () => {
        history.goBack();
    };
    const chainTotalData = useRecoilValue(BlockChainState);

    const currentData = (chainTotalData[type * 1] || []).filter((data) => {
        return !showMy || data.name === userInfo.nickname;
    });
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

            <Box className="container">
                <Box mt="30px">
                    <Box>
                        <Typography className={`txt_20 txt_line`}>
                            현재
                        </Typography>
                        &nbsp;
                        <Typography className={`txt_20 txt_b txt_line`}>
                            {titleName}빌딩
                        </Typography>
                        <Typography className={`txt_20 txt_line`}>
                            은
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={`txt_20 txt_b txt_line`}>
                            {currentData.length}층
                        </Typography>
                        <Typography className={`txt_20 txt_line`}>
                            이며,
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={`txt_20 txt_line`}>
                            {`모금액은 `}
                        </Typography>
                        &nbsp;
                        <Typography className={`txt_20 txt_b txt_line`}>
                            {getNumberString(total)}
                        </Typography>
                        &nbsp;
                        <Typography className={`txt_20 txt_line`}>
                            {` 입니다`}
                        </Typography>
                    </Box>
                </Box>
                <Box>
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
                            return (
                                <Box
                                    key={index}
                                    mt={`${index === 0 ? '0' : '15px'}`}
                                >
                                    <BlockChainComponent
                                        {...eachData}
                                        isMine={
                                            userInfo.nickname === eachData.name
                                        }
                                        donationId={type * 1}
                                        floor={arr.length - index}
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                    <Box>
                        <img src={`/images/floor_${imageName}`} />
                    </Box>
                </Box>
            </Box>
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
