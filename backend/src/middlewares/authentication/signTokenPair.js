const jwt = require( 'jsonwebtoken' );
const util = require( 'util' );
const sign = util.promisify( jwt.sign );

module.exports = async (req, res, next) => {
  try {
    const { user } = req;
    const tokenPair = {};

    tokenPair.accessToken = await sign( {
                                          userId: user.id,
                                          email: user.email,
                                        }, 'secret', {
                                          expiresIn: '0.2h',
                                        } );
    tokenPair.refreshToken = await sign( {}, 'secret', {
      expiresIn: '30d',
    } );
    req.tokenPair = tokenPair;
    next();

  } catch (e) {
    next( e );
  }
};
