import React          from 'react';
import { withRouter } from 'react-router';
import SignInForm     from '../../components/forms/SignInForm';
import './SignInPage.scss';

const SignInPage = props => {
  return (
    <SignInForm/>
  );
};

export default withRouter( SignInPage );