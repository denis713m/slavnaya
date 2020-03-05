import React          from 'react';
import { withRouter } from 'react-router';
import Navigation     from '../components/Navigation';

const HomePage = props => {
  return (
    <div>
      <h1>Home Page.</h1>
      <Navigation/>
    </div>
  );
};


export default withRouter( HomePage );