import {loginByEmail,signTokenPair}  from '../middlewares/authentication';
import express    from 'express';
import { ACTION } from './../constants';
import schemas from './../utils/validation';
import ValidationService from './../middlewares/validation';
import UserController         from '../controllers/user.js';
import RefreshTokenController from '../controllers/refreshToken.js';

const authenticationRoute = express.Router();

authenticationRoute.post( '/sign_up',
                          ValidationService.createValidationMW( schemas.userSchema )( ACTION.CREATE ),
                          UserController.createUser
);

authenticationRoute.post( '/sign_in',
                          loginByEmail,
                          signTokenPair,
                          RefreshTokenController.createRefreshToken
);

export default authenticationRoute;
