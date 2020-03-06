const { RefreshToken } = require( './../models' );
const Controller = require( './../utils/controller' );
const { BadRequestError } = require( '../utils/errors' );

class RefreshTokenController {

  constructor () {
    this._controller = new Controller( RefreshToken );
  }

  createRefreshToken = async (req, res, next) => {
    try {
      const refreshToken = await this._controller.create( {
                                                            refreshToken: req.tokenPair.refreshToken,
                                                            userId: req.user.id,
                                                          } );

      if (refreshToken) {
        return res.send( {
                           tokenPair: req.tokenPair,
                           user: req.user,
                         } );
      }
      next( new BadRequestError() );
    } catch (e) {
      next( e );
    }
  };

}

module.exports = new RefreshTokenController();