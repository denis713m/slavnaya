const findUserByEmail = require( './findUserByEmail.js' );
const comparePassword = require( './comparePassword.js' );
const loginByEmail = require( './loginByEmail.js' );
const signTokenPair = require( './signTokenPair.js' );

module.exports = {
  findUserByEmail,
  comparePassword,
  loginByEmail,
  signTokenPair,
};