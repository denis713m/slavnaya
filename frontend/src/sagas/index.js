import { takeLatest }    from 'redux-saga/effects';
import { loginUserSaga } from './authSaga.js';

export default function * rootSaga () {

  takeLatest( ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga );

}

