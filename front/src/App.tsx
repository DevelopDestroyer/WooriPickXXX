import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './basic.css';
import AuthRouteGuard from './component/AuthRouteGuard';
import './overide.css';
import GivingPage from './page/GivingPage';
import HomePage from './page/HomePage';
import MainPage from './page/MainPage';
import SignupPage from './page/SignupPage';

const App: React.FC = () => {
    useEffect(() => {
        window.addEventListener(
            'message',
            (e) => {
                console.log(e);
                const res = e.data.split(';;;');
                if (res[0] === 'parent') {
                    alert(res[1]);
                } else if (res[0] === 'child') {
                    console.log('called by me');
                }
            },
            false
        );
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/mainpage" component={MainPage} />
                <Route exact path="/signup" component={SignupPage} />
                <AuthRouteGuard exact path="/" component={HomePage} />
                <AuthRouteGuard exact path="/giving" component={GivingPage} />

                <Redirect from="*" to="/mainpage" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
