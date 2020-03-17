import { loginByEmail, signTokenPair } from '../middlewares/authentication';
import express                         from 'express';
import RefreshTokenController          from '../controllers/refreshToken.js';

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


export default authenticationRoute;
