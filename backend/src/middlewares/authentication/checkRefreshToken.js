import jwt                                     from 'jsonwebtoken';
import util                                    from 'util';
import { AuthorizationError, BadRequestError } from '../../utils/errors';
import { RefreshToken }                        from '../../models';

const verifyAsync = util.promisify( jwt.verify );
const decodeAsync = util.promisify( jwt.decode );
const signAsync = util.promisify( jwt.sign );

export const checkRefreshToken = async (req, res, next) => {
  try {

    const data = await verifyAsync( req.body.refreshToken, 'secret' );
    return next();
  } catch (e) {
    next( new AuthorizationError() );
  }
};

export const decodeAccessToken = async (req, res, next) => {
  try {

    req.accessTokenPayload = jwt.decode( req.headers.authorization );
    next();
  } catch (e) {
    next( new AuthorizationError() );
  }
};

export const findRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = await RefreshToken.findOne( {
                                                       where: {
                                                         value: req.body.refreshToken
                                                       }
                                                     } );
    if (refreshToken) {
      req.refreshToken = refreshToken;
      return next();
    }
    next( new AuthorizationError() );
  } catch (e) {
    next( new AuthorizationError() );
  }
};

export const updateRefreshToken = async (req, res, next) => {
  try {
    req.refreshToken = await req.refreshToken.update( {
                                                        value: await signAsync( {},
                                                                                'secret',
                                                                                {
                                                                                  expiresIn: '30d',
                                                                                }
                                                        )
                                                      } );
    if (req.refreshToken) {

      req.refreshToken = req.refreshToken.value;

      return next();
    }
    next( new AuthorizationError() );
  } catch (e) {
    next( new AuthorizationError() );
  }
};

export const signAccessToken = async (req, res, next) => {

  const { accessTokenPayload: { userId, email } } = req;

  req.accessToken = await signAsync( {
                                       userId,
                                       email,
                                     }, 'secret', {
                                       expiresIn: '0.2h',
                                     } );
  next();

};
