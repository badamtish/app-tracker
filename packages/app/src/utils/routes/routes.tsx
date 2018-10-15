import history from '../history';
import React, { SFC } from 'react';
import Home from '../../components/home/home';
import Spinner from '../../components/callback/spinner';

import { Route, RouteComponentProps } from 'react-router';
import { Router } from 'react-router-dom';
import WebAuthentication from '../auth/auth';
import Login from '../../components/login/login';
import AppBar from '../../components/app-bar/app-bar';

const auth = new WebAuthentication();

const handleAuthentication = (props: RouteComponentProps<{}>) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

const Routes: SFC<{}> = () => {
    return (
        <Router history={history} >
            <div className="root">
                <AppBar auth={auth} />
                <Route exact={true} path="/" render={props => <Login auth={auth} />} />
                <main role="main" >
                    <Route path="/home" render={props => <Home auth={auth} />} />
                    <Route path="/callback" render={props => { handleAuthentication(props); return <Spinner {...props} />; }} />
                </main>
            </div>
        </Router>

    );
};
export default Routes;