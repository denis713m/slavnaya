const { loginByEmail, signTokenPair } = require( '../middlewares/authentication' );

const express = require( 'express' );
const { ACTION } = require( './../constants' );
const { userSchema } = require( './../utils/validation' );
const { createValidationMW } = require( './../middlewares/validation' );
const { UserController, RefreshTokenController } = require( '../controllers' );

const authenticationRoute = express.Router();

authenticationRoute.post( '/sign_up',
                          createValidationMW( userSchema )( ACTION.CREATE ),
                          UserController.createUser
);

authenticationRoute.post( '/sign_in',
                          loginByEmail,
                          signTokenPair,
                          RefreshTokenController.createRefreshToken
);

module.exports = authenticationRoute;
