import React          from 'react';
import { withRouter } from 'react-router';
import Navigation     from '../components/Navigation';
import { Formik }     from 'formik';
import SignInForm     from '../components/SignInForm';

const SignInPage = props => {

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm/>
    </div>
  );
};

export default withRouter( SignInPage );