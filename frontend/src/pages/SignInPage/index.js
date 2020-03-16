import React          from 'react';
import { withRouter } from 'react-router';
import './SignInPage.css';
import SignInForm     from '../../components/forms/SignInForm';

const Index = props => {
  return (
    <>
      <SignInForm/>
    </>
  );
};

export default withRouter( Index );