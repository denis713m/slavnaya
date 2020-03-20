import axiosInstance from './index.js';

export const getUsers = async () => axiosInstance.get( '/admin/users' );
