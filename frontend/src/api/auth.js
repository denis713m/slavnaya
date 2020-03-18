import restApi                                 from './index.js';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants';

const authenticateUser = async (url, data) => {
  try {
    const response = await restApi.post( url, data );
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
export const loginUserByRefreshToken = async () => authenticateUser( '/refresh_sign_in', {
  refreshToken: localStorage.getItem( REFRESH_TOKEN_KEY )
} );
export const signUpUser = async data => authenticateUser( '/sign_up', data );