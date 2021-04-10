import React from 'react';
import { Button } from '@material-ui/core';
import { IsLoginState } from '../recoil/Session';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import http from '../http';

const HomePage: React.FC = () => {
  const setIsLogin = useSetRecoilState(IsLoginState);
  const history = useHistory();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          await setIsLogin(false);
          history.push('/signin');
        }}
      >
        로그아웃
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          const res = await http.post('/api/members', {
            name: '이재용',
            phoneNumber: '010-5018-1235',
            password: '000000',
          });
          console.log(res);
        }}
      >
        이재용 유저 추가
      </Button>
    </>
  );
};

export default HomePage;
