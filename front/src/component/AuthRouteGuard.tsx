import React from 'react';
import { RouteProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { IsLoginState } from '../recoil/Session';
import AuthRoute from './AuthRoute';

const AuthRouteGuard: React.FC<RouteProps> = (props: RouteProps) => {
    const isLogin = useRecoilValue(IsLoginState);
    return <AuthRoute isLogin={isLogin} {...props} />;
};

export default AuthRouteGuard;
