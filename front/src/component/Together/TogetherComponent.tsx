import { Box } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import http from '../../http';
import { CurrentUserState } from '../../recoil/Session';
import { FriendDataSetState, TogetherAVGState } from '../../recoil/Together';
import HeaderDeafault from '../Common/HeaderDefault';
import TCNoFriend from './TCNoFriend';
import TCRanking from './TCRanking';
import TCStatus from './TCStatus';

const TogetherComponent: React.FC = () => {
    const friendList = useRecoilValue(FriendDataSetState);
    const friendMode = friendList.length > 0;

    const userInfo = useRecoilValue(CurrentUserState);
    const setAVGInfo = useSetRecoilState(TogetherAVGState);

    useEffect(() => {
        if (userInfo.nickname) {
            http.get(`/api/members/${userInfo.nickname}/together`).then(
                (res) => {
                    setAVGInfo(res.data.data);
                    console.log(res);
                }
            );
        }
    }, [userInfo]);

    useEffect(() => {
        if (friendList.length > 0) {
            alert(`component ${friendList.toString()}`);
        }
    }, [friendList]);

    return (
        <>
            <HeaderDeafault icon={<PeopleIcon />} title="투게더" />
            <Box mx="1rem" overflow="hiddne">
                {friendMode && <>isRanking</>}
                <Box mt="1rem">
                    <TCStatus />
                </Box>
                <Box mt="1rem">
                    <TCRanking />
                </Box>
                {!friendMode && (
                    <Box mt="1rem">
                        <TCNoFriend />
                    </Box>
                )}
            </Box>
        </>
    );
};

export default TogetherComponent;
