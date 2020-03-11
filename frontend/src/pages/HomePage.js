import React          from 'react';
import { withRouter } from 'react-router';
import AbstractList   from '../components/AbstractList';

const HomePage = props => {

  return (
    <>
      <h1>Home Page!</h1>
      <AbstractList/>
    </>
  );
};

export default withRouter( HomePage );