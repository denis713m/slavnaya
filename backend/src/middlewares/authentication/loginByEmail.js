const { User } = require( '../../models' );
const { BadRequestError } = require( '../../utils/errors' );
const bcrypt = require( 'bcrypt' );

module.exports = async (req, res, next) => {

  const { body: { email, password } } = req;
  try {
    const user = await User.findOne( {
                                       where: {
                                         email,
                                       }
                                     } );
    if (user) {
      if (await bcrypt.compare( password, user.password )) {

        const prepareUser = user.get();
        delete prepareUser.password;

        req.user = prepareUser;
        return next();
      }
    }

    next( new BadRequestError( 'email or password is incorrect' ) );
  } catch (e) {
    next( e );
  }
};


