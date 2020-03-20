import axios                from 'axios';
import { ACCESS_TOKEN_KEY } from '../constants';
import { refreshTokens }    from './auth.js';

const config = {
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-type': 'application/json',
  },
};

const axiosInstance = axios.create( config );

axiosInstance.interceptors.request.use( config => {
  config.headers.authorization = sessionStorage.getItem( ACCESS_TOKEN_KEY );
  return config;
} );

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const { response: { status }, config } = error;
    switch (status) {
      case 419: {

        await refreshTokens();

        return axiosInstance.request( config );

      }
      default:
        throw error;
    }
  }
);

export default axiosInstance;
