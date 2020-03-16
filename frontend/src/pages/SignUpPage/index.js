import React          from 'react';
import { withRouter } from 'react-router';
import SignUpForm     from '../../components/forms/SignUpForm';
import './SignUpPage.scss';

const Index = (props) => {

  return (

       <SignUpForm/>
  );
};

export default withRouter( Index );