import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './basic.css';
import AuthRouteGuard from './component/AuthRouteGuard';
import { FriendDataSet } from './component/Together/DataModel';
import './overide.css';
import BenefitCompanyPage from './page/BenefitCompanyPage';
import CategoryPage from './page/CategoryPage';
import GivingPage from './page/GivingPage';
import HomePage from './page/HomePage';
import MainPage from './page/MainPage';
import SignupPage from './page/SignupPage';
import { FriendDataSetState } from './recoil/Together';

const App: React.FC = () => {
    const setFrined = useSetRecoilState(FriendDataSetState);
    useEffect(() => {
        window.addEventListener(
            'message',
            (e) => {
                console.log(e);
                const res = e.data.split(';;;');
                if (res[0] === 'parent') {
                    alert();
                    const dataStr: string = res[1] as string;
                    console.log(`Data Str ${dataStr}`);
                    const eachPersonStr = dataStr.split(';');
                    const friendList: FriendDataSet[] = [];
                    eachPersonStr.forEach((eachStr: string) => {
                        const privateDataList: string[] = eachStr.split(':');
                        friendList.push({
                            name: privateDataList[0],
                            displayname: privateDataList[1],
                            cellphone: privateDataList[2],
                        });
                    });
                    console.log(eachPersonStr);
                    setFrined(friendList);
                    alert(`App Alert ${friendList.toString()}`);
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
                <Route exact path="/category" component={CategoryPage} />
                <AuthRouteGuard exact path="/" component={HomePage} />
                <AuthRouteGuard exact path="/giving" component={GivingPage} />
                <AuthRouteGuard
                    exact
                    path="/benefit-company/:name"
                    component={BenefitCompanyPage}
                />

                <Redirect from="*" to="/mainpage" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
