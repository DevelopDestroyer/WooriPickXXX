import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { IsLoginState } from '../recoil/Session';

const useStyles = makeStyles(() => ({
    imgContainer: {
        width: '100px',
    },
    bodyReplace: {
        zIndex: -1,
        position: 'fixed',
        width: '100%',
        height: '100%',
    },
}));

const SignupPage: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const setIsLogin = useSetRecoilState(IsLoginState);

    return <>아 야식먹고싶다.</>;
};

export default SignupPage;
