import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface AuthRouteProps extends RouteProps {
    isLogin: boolean;
}

class AuthRoute extends Route<AuthRouteProps> {
    render = () => {
        const { isLogin, children, component, ...others } = this.props;
        if (isLogin) {
            return (
                <Route {...others} component={component}>
                    {children}
                </Route>
            );
        } else {
            return (
                <Route
                    {...others}
                    render={() => <Redirect to={{ pathname: '/signin' }} />}
                />
            );
        }
    };
}

export default AuthRoute;
