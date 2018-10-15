import React from 'react';
import { Auth0Authentication } from '../../utils/auth/auth0-authentication';
import { IUser } from '../../utils/models';
import { IState } from '../../utils/redux/state/state';
import { connect } from 'react-redux';
import { loadUser } from '../../utils/redux/actions/user.action';
import jwt from 'jsonwebtoken';
import Applications from '../applications/applications';
import Login from '../login/login';

interface AuthProps {
  auth: Auth0Authentication;
}

interface HomeProps {
  user: IUser;
}

interface Dispatch {
  loadUser(user: any): IUser;
}

interface State {
  isAuthenticated: any;
}

export class Home extends React.Component<AuthProps & HomeProps & Dispatch, State> {
  login() {
    this.props.auth.login();
  }

  componentWillMount() {
    this.props.loadUser(jwt.decode(localStorage.getItem('id_token') || ''));
    const { isAuthenticated } = this.props.auth;
    this.setState({ isAuthenticated });

  }

  render() {
    return (
      <div className="container">
        {this.state.isAuthenticated && this.props.user ? <Applications userId={this.props.user.sub} /> : <Login auth={this.props.auth} />}
      </div>
    );
  }
}

export function mapStateToProps(state: IState): HomeProps {
  return {
    user: state.user
  };
}

export function mapDispatchToProps(dispatch: any): Dispatch {
  return {
    loadUser: (user: any) => dispatch(loadUser(user))
  };
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Home);