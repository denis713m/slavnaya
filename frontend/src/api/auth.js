import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants';
import http                                    from './index.js';

const authenticateUser = async (url, data) => {
  try {
    const response = await http.post( url, data );
    const { data: { tokenPair } } = response;
    sessionStorage.setItem( ACCESS_TOKEN_KEY, tokenPair.accessToken );
    localStorage.setItem( REFRESH_TOKEN_KEY, tokenPair.refreshToken );
    return response;
  } catch (e) {
    sessionStorage.removeItem( ACCESS_TOKEN_KEY );
    localStorage.removeItem( REFRESH_TOKEN_KEY );
    throw e;
  }
};
export const loginUser = async data => authenticateUser( '/sign_in', data );
export const signUpUser = async data => authenticateUser( '/sign_up', data );
export const loginUserByRefreshToken = async () => authenticateUser( '/refresh_sign_in', {
  refreshToken: localStorage.getItem( REFRESH_TOKEN_KEY )
} );
export const refreshTokens = async () => authenticateUser( '/refresh_tokens', {
  refreshToken: localStorage.getItem( REFRESH_TOKEN_KEY )
} );
