import restApi from './index.js';

export const getUsers = async () => restApi.get( '/admin/users' );
