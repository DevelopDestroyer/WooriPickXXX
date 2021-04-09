import React from 'react';
import { Button } from '@material-ui/core';
import { IsLoginState } from '../recoil/Session';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';

const HomePage: React.FC = () => {
  const setIsLogin = useSetRecoilState(IsLoginState);
  const history = useHistory();
  return (
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
  );
};

export default HomePage;
