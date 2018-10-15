import autobind from 'autobind-decorator';
import history from '../history';
import { AUTH_CONFIG } from './auth0-variables';
import { Auth0Authentication } from './auth0-authentication';
import { Auth0DecodedHash, Auth0Error, WebAuth } from 'auth0-js';
// import jwt from 'jsonwebtoken';
/**
 * Web based Auth0 authentication
 *
 * @export
 * @class WebAuthentication
 * @implements {Auth0Authentication}
 */
export default class WebAuthentication implements Auth0Authentication {
  /**
   * @property
   * @private
   * @type {WebAuth}
   * @memberof WebAuthenticationManager
   */
  auth0: WebAuth = new WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile',
  });

  get isAuthenticated(): boolean {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at')!);
    return new Date().getTime() < expiresAt;
  }

  @autobind
  login(): void {
    this.auth0.authorize();
  }

  @autobind
  handleAuthentication(): void {
    this.auth0.parseHash((e: Auth0Error, result: Auth0DecodedHash) => {
      if (result && result.accessToken && result.idToken) {
        this.setSession(result);
        history.replace('/home');
      } else if (e) {
        history.replace('/home');
      }
    });
  }

  @autobind
  setSession(authResult: Auth0DecodedHash): void {
    const { accessToken, expiresIn, idToken } = authResult;
    let expiresAt = JSON.stringify(expiresIn! * 1000 + new Date().getTime());
    localStorage.setItem('access_token', accessToken!);
    localStorage.setItem('id_token', idToken!);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  @autobind
  logout(): void {
    localStorage.clear();
    this.auth0.logout({ clientID: '5dvpziIDRD6v5oFGlIQXJPE15ACPCh7Q' });
  }
}