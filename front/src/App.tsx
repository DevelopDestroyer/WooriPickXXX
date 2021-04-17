import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './basic.css';
import './overide.css';
import MainPage from './page/MainPage';
import SignupPage from './page/SignupPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/mainpage" component={MainPage} />
                <Route exact path="/signup" component={SignupPage} />

                <Redirect from="*" to="/mainpage" />
            </Switch>
        </BrowserRouter>
    );
};
// <!--<AuthRouteGuard exact path="/" component={HomePage} /> -->
export default App;
