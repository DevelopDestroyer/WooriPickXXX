import {
    Box,
    Card,
    CardHeader,
    makeStyles,
    Tab,
    Tabs,
    Typography,
} from '@material-ui/core';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commonSlickSettings } from '../component/Common';
import HeaderAction from '../component/Common/HeaderAction';
import { a11yProps } from '../component/Common/util';
import AddFriendList from '../component/Together/AddFriendList';
import {
    DUMMY_NOT_UNUSEDSET,
    UsedFriendSet,
} from '../component/Together/DataModel';
import http from '../http';
import { CurrentUserState } from '../recoil/Session';
import { FriendDataSetState, UnUsedFriendState } from '../recoil/Together';

const useStyles = makeStyles(() => ({
    dfColor: {
        color: 'white',
    },
    buttonLayout: {
        width: '80%',
        backgroundColor: '#3BAAD8',
        borderRadius: '0.5rem',
        flexBasis: 0,
        flexGrow: 1,
    },
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box style={{ backgroundColor: '#F1F4F7' }} p={3}>
                {children}
            </Box>
        </div>
    );
}

const AddFriendPage: React.FC = () => {
    const history = useHistory();

    const userInfo = useRecoilValue(CurrentUserState);
    const friendState = useRecoilValue(FriendDataSetState);
    const [page, setPage] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    const [unUsedF, setUnUsedF] = useRecoilState(UnUsedFriendState);

    const tabChange = (event: ChangeEvent<any>, nextValue: number) => {
        setPage(nextValue);
        sliderRef.current && sliderRef.current.slickGoTo(nextValue);
    };

    useEffect(() => {
        if (friendState.length > 0) {
            console.log(friendState);
            const data = {
                nickname: userInfo.nickname,
                list: Array<any>(),
            };
            friendState.forEach((eachFriend) => {
                data.list.push({ phoneNumber: eachFriend.cellphone });
            });
            http.post('/api/friends', data).then((res) => {
                const apiFriend: UsedFriendSet[] = res.data.data;

                const inputUnUsedF: UsedFriendSet[] = [];
                apiFriend.forEach((data) => {
                    inputUnUsedF.push(data);
                });
                setUnUsedF(inputUnUsedF);
            });
        }

        console.log('effect');
    }, [friendState]);

    const addClick = (friendInfo: UsedFriendSet) => {
        setUnUsedF(
            unUsedF.filter(
                (data) => data.phoneNumber !== friendInfo.phoneNumber
            )
        );
        http.post('/api/friend', {
            userNickname: userInfo.nickname,
            friendNickname: friendInfo.nickname as string,
        });
    };

    const goBackFunciton = () => {
        history.goBack();
    };
    return (
        <div className="bg_gray5">
            <HeaderAction
                isLast={false}
                headerTitle={'친구추가'}
                onMoveClick={goBackFunciton}
            />

            <div className="container">
                <Box mt="30px">
                    <Typography className="txt_b txt_20">
                        투게더를 같이 즐길
                    </Typography>
                    <Typography className="txt_b txt_20">
                        친구를 추가해주세요.
                    </Typography>
                </Box>

                <Card style={{ marginTop: '24px' }}>
                    <CardHeader
                        title={
                            <Typography className="txt_b txt_20">
                                내 연락처
                            </Typography>
                        }
                    />
                    <Box mt="24px">
                        <Tabs
                            value={page}
                            onChange={tabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            scrollButtons="auto"
                        >
                            <Tab
                                key={0}
                                label={'혜택통 사용중인 친구'}
                                {...a11yProps(0)}
                            />
                            <Tab
                                key={1}
                                label={'혜택동 미가입 친구'}
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </Box>
                    <Slider {...commonSlickSettings} ref={sliderRef}>
                        <TabPanel index={0} value={page}>
                            {unUsedF.length > 0 ? (
                                <AddFriendList
                                    onClick={addClick}
                                    data={unUsedF}
                                    mode="USED"
                                />
                            ) : (
                                <Typography className="txt_14 txt_center">
                                    혜택통 사용중인 친구 중, 모든유저를 친구추가
                                    하였습니다
                                </Typography>
                            )}
                        </TabPanel>
                        <TabPanel index={1} value={page}>
                            <AddFriendList
                                data={DUMMY_NOT_UNUSEDSET}
                                mode="NOTUSED"
                            />
                        </TabPanel>
                    </Slider>
                </Card>
            </div>
        </div>
    );
};

export default AddFriendPage;
