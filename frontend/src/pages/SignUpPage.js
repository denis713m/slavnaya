import React          from 'react';
import { withRouter } from 'react-router';
import Navigation     from '../components/Navigation';
import SignUpForm     from '../components/SignUpForm';

const SignUpPage = (props) => {

  return (
    <div>
      <h1>Sign Up Page.</h1>
      <SignUpForm/>
    </div>
  );
};

export default withRouter( SignUpPage );