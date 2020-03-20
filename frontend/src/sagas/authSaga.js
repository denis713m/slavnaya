import { put }       from 'redux-saga/effects';
import { loginUser } from '../api/auth.js';

export function * loginUserSaga (action) {

  try {

    const { data: { user } } = yield loginUser( action.data );
    yield put( {
                 type: ACTION_TYPES.LOGIN_USER_SUCCESS,
                 user,
               } );

  } catch (e) {
    yield put( {
                 type: ACTION_TYPES.LOGIN_USER_ERROR,
                 error: e,
               } );

  }

}
