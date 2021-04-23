import React from 'react';
import { RouteProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { CurrentUserState } from '../recoil/Session';
import AuthRoute from './AuthRoute';

const AuthRouteGuard: React.FC<RouteProps> = (props: RouteProps) => {
    const currentUser = useRecoilValue(CurrentUserState);
    return <AuthRoute isLogin={currentUser.nickname !== ''} {...props} />;
};

export default AuthRouteGuard;
