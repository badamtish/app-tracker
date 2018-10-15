import React from 'react';
import { Button } from '@material-ui/core';
import { Auth0Authentication } from '../../utils/auth/auth0-authentication';
import history from '../../utils/history';

interface AuthProps {
    auth: Auth0Authentication;
}

export default class Login extends React.Component<AuthProps> {
    componentWillMount() {
        if (this.props.auth.isAuthenticated) {
            history.replace('/home');
        }
    }

    render() {
        console.log(process.env.REACT_APP_SECRET_CODE);
        return (
            <div className="bgimage">
                <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto' }}>
                        <Button variant="contained" color="primary" size="large">Login</Button><br /><br /><br />
                        <Button variant="outlined" color="primary" size="large">Sign Up</Button><br /><br /><br />
                    </div>
                </div>
            </div>
        );
    }
}