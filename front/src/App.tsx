import React from 'react';
import Counter from './component/Counter';
import { useRecoilValue } from 'recoil';
import { CounterLabelState } from './recoil/CounterState';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SigninPage from './page/SigninPage';
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import { requireLogin } from './Routerguard';
import AuthRoute from './component/AuthRoute';
import AuthRouteGuard from './component/AuthRouteGuard';
import HomePage from './page/HomePage';

const App: React.FC = () => {
  const countLabel = useRecoilValue(CounterLabelState);

  return (
    <BrowserRouter>
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <Route exact path="/signin" component={SigninPage} />
          <AuthRouteGuard exact path="/" component={HomePage} />
        </Switch>
      </GuardProvider>
    </BrowserRouter>
  );
};

export default App;
