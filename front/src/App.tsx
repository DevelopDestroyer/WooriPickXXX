import React from 'react';
import Counter from './component/Counter';
import { useRecoilValue } from 'recoil';
import { CounterLabelState } from './recoil/CounterState';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import AuthRouteGuard from './component/AuthRouteGuard';
import HomePage from './page/HomePage';
import MainPage from './page/MainPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App: React.FC = () => {
  const countLabel = useRecoilValue(CounterLabelState);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/mainpage" component={MainPage} />
        <AuthRouteGuard exact path="/" component={HomePage} />
        <Redirect from="*" to="/mainpage" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
