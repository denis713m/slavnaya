const express = require( 'express' );
const errorHandlers = require( './../middlewares/errorHandler' );
const adminRouter = require( './admin.js' );
const userRouter = require( './user.js' );
const taskRouter = require( './task.js' );
const authenticationRoute = require( './authentication.js' );
const { checkAuthorization } = require( './../middlewares/authorization' );
const router = express.Router();


router.use( authenticationRoute );

router.use( checkAuthorization );

router.use( '/admin', adminRouter );
router.use( userRouter );
router.use( taskRouter );

router.use( errorHandlers.handleValidationError,
            errorHandlers.handleApplicationError,
            errorHandlers.handleSequelizeError,
);

module.exports = router;
