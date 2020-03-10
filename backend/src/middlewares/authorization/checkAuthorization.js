import { AuthorizationError } from '../../utils/errors';

export default (req, res, next) => {
  try {
    if (req.headers.authorization) {
      req.authorizationData = {
        id: req.headers.authorization
      };
      return next();
    }
    next( new AuthorizationError() );
  } catch (e) {
    next( e );
  }
}