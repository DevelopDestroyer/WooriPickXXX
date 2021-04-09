import React from 'react';
import { Redirect, Route, RouteProps, RouterProps } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  CounterState,
  CounterTypeState,
  CounterLabelState,
} from '../recoil/CounterState';
import { IsLoginSelector, IsLoginState } from '../recoil/Session';
import AuthRoute from './AuthRoute';

const AuthRouteGuard: React.FC<RouteProps> = (props: RouteProps) => {
  const isLogin = useRecoilValue(IsLoginState);
  console.log('AuthGardu Called');
  return <AuthRoute isLogin={isLogin} {...props} />;
};

export default AuthRouteGuard;
