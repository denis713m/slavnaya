import { loginByEmail, signTokenPair } from '../middlewares/authentication';
import express                         from 'express';
import RefreshTokenController          from '../controllers/refreshToken.js';
import jwt                             from 'jsonwebtoken';
import {
  checkRefreshToken,
  decodeAccessToken,
  findRefreshToken, updateRefreshToken
}                                      from '../middlewares/authentication/checkRefreshToken.js';

const authenticationRoute = express.Router();

authenticationRoute.post( '/sign_in',
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

authenticationRoute.post( '/refresh_auth',
                          checkRefreshToken,
                          decodeAccessToken,
                          findRefreshToken,
                          updateRefreshToken,
                          async (req, res, next) => {
                            try {

                              return res.send( {
                                                 refreshToken: req.refreshToken.value,
                                                 accessToken: jwt.sign( req.accessTokenPayload, 'secret', {
                                                   expiresIn: '0.5h',
                                                 } )
                                               } );

                            } catch (e) {
                              next( e );
                            }
                          }
);

export default authenticationRoute;
