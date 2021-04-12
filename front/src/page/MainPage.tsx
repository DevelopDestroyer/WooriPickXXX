import React from 'react';
import { IsSplashState } from '../recoil/Session';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router';
import SigninPage from './SigninPage';
import RenderPage from './RenderPage';

const MainPage: React.FC = () => {
  const isSplashSkip = useRecoilValue(IsSplashState);
  return <>{isSplashSkip ? <SigninPage /> : <RenderPage />}</>;
};

export default MainPage;
