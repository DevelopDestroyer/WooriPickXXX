import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './basic.css';
import AuthRouteGuard from './component/AuthRouteGuard';
import GivingCompleteDialog from './component/Common/GivingCompleteDialog';
import {
    DUMMY_FRIEND_SET,
    FriendDataSet,
} from './component/Together/DataModel';
import './overide.css';
import AddFriendPage from './page/AddFriendPage';
import BenefitCompanyPage from './page/BenefitCompanyPage';
import BlockChainPage from './page/BlockChainPage';
import BlockChainSelectPage from './page/BlockChainSelectPage';
import CategoryPage from './page/CategoryPage';
import GivingPage from './page/GivingPage';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
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
                    const dataStr: string = res[1] as string;
                    if (dataStr.length === 0) {
                        setFrined(DUMMY_FRIEND_SET);
                        return;
                    }
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
                } else if (res[0] === 'child') {
                    console.log('called by me');
                    setFrined(DUMMY_FRIEND_SET);
                }
            },
            false
        );
    }, []);

    return (
        <BrowserRouter>
            <GivingCompleteDialog />

            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/signup" component={SignupPage} />
                <AuthRouteGuard exact path="/login" component={LoginPage} />
                <AuthRouteGuard
                    exact
                    path="/category"
                    component={CategoryPage}
                />
                <AuthRouteGuard exact path="/homepage" component={HomePage} />
                <AuthRouteGuard exact path="/giving" component={GivingPage} />
                <AuthRouteGuard
                    exact
                    path="/benefit-company/:name"
                    component={BenefitCompanyPage}
                />
                <AuthRouteGuard
                    exact
                    path="/add-friend"
                    component={AddFriendPage}
                />
                <AuthRouteGuard
                    exact
                    path="/chain-select"
                    component={BlockChainSelectPage}
                />
                <AuthRouteGuard
                    exact
                    path="/blockchain/:type"
                    component={BlockChainPage}
                />

                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
