import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import Counter from '../component/Counter';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { IsLoginState } from '../recoil/Session';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SigninPage: React.FC = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const setIsLogin = useSetRecoilState(IsLoginState);

  return (
    <>
      <Typography>환영합니다!</Typography>
      <Button>혜택통 만들기</Button>
      <Button
        onClick={async () => {
          await setIsLogin(true);
          history.push('/');
        }}
      >
        기존 사용자 로그인
      </Button>
    </>
  );
};

export default SigninPage;
