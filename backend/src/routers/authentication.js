import { loginByEmail, signTokenPair }            from '../middlewares/authentication';
import express                                    from 'express';
import { RefreshTokenController, UserController } from '../controllers';
import { createValidationMW }                     from '../middlewares/validation';
import { LOGIN_USER_SCHEMA, SING_UP_USER_SCHEMA } from '../utils/validation/user.js';

const authenticationRoute = express.Router();

authenticationRoute.post( '/sign_in',
                          createValidationMW( LOGIN_USER_SCHEMA ),
                          loginByEmail,
                          signTokenPair,
                          RefreshTokenController.saveRefreshToken,
                          (req, res, next) => {
                            res.send( {
                                        user: req.user,
                                        tokenPair: req.tokenPair,
                                      } );
                          }
);

authenticationRoute.post( '/sign_up',
                          createValidationMW( SING_UP_USER_SCHEMA ),
                          UserController.createUser,
                          signTokenPair,
                          RefreshTokenController.saveRefreshToken,
                          (req, res, next) => {
                            res.send( {
                                        user: req.user,
                                        tokenPair: req.tokenPair,
                                      } );
                          }
);

export default authenticationRoute;
