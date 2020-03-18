import { User }                                   from './../models';
import { loginByEmail, signTokenPair }            from '../middlewares/authentication';
import express                                    from 'express';
import { RefreshTokenController, UserController } from '../controllers';
import { createValidationMW }                     from '../middlewares/validation';
import { LOGIN_USER_SCHEMA, SING_UP_USER_SCHEMA } from '../utils/validation/user.js';
import {
  checkRefreshToken,
  findRefreshToken,
  signAccessToken,
  updateRefreshToken
}                                                 from '../middlewares/authentication/checkRefreshToken.js';
import { AuthorizationError }                     from '../utils/errors';

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

authenticationRoute.post( '/refresh_sign_in',
                          checkRefreshToken,
                          findRefreshToken,
                          updateRefreshToken,
                          signAccessToken,
                          async (req, res, next) => {
                            try {
                              const { user } = req;
                              if (user) {
                                delete user.password;
                                return res.send( {
                                                   user: user,
                                                   tokenPair: {
                                                     accessToken: req.accessToken,
                                                     refreshToken: req.refreshToken,
                                                   }
                                                 } );
                              }
                              next( new AuthorizationError() );
                            } catch (e) {
                              next( new AuthorizationError() );
                            }
                          }
);

authenticationRoute.post( '/refresh_tokens',
                          checkRefreshToken,
                          findRefreshToken,
                          updateRefreshToken,
                          signAccessToken,
                          async (req, res, next) => {

                            return res.send( {
                                               accessToken: req.accessToken,
                                               refreshToken: req.refreshToken,
                                             } );
                          }
);

export default authenticationRoute;
