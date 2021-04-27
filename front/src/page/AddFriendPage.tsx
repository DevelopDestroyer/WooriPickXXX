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
import { useRecoilValue } from 'recoil';
import { commonSlickSettings } from '../component/Common';
import HeaderAction from '../component/Common/HeaderAction';
import { a11yProps } from '../component/Common/util';
import AddFriendList from '../component/Together/AddFriendList';
import { CurrentUserState } from '../recoil/Session';
import { FriendDataSetState } from '../recoil/Together';

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
            <Box p={3}>{children}</Box>
        </div>
    );
}

const AddFriendPage: React.FC = () => {
    const history = useHistory();

    const userInfo = useRecoilValue(CurrentUserState);
    const friendState = useRecoilValue(FriendDataSetState);
    const [page, setPage] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    const tabChange = (event: ChangeEvent<any>, nextValue: number) => {
        setPage(nextValue);
        sliderRef.current && sliderRef.current.slickGoTo(nextValue);
    };

    useEffect(() => {
        console.log('effect');
    }, []);

    const goBackFunciton = () => {
        console.log('goback');
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
                            <AddFriendList data={friendState} mode="USED" />
                        </TabPanel>
                        <TabPanel index={1} value={page}>
                            <AddFriendList data={friendState} mode="NOTUSED" />
                        </TabPanel>
                    </Slider>
                </Card>
            </div>
        </div>
    );
};

export default AddFriendPage;
