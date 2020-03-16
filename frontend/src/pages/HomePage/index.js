import React, { Component } from 'react';
import { withRouter }       from 'react-router';
import Navigation           from '../../components/Navigation';
import H1                   from '../../components/H1';
import H2                   from '../../components/H2';

class Index extends Component {

  render () {
    return (
      <>
        <h1>Home Page!</h1>
        <Navigation/>
        <H1>Text in H1</H1>
        <H2>Text in H2</H2>
      </>
    );
  }
}

export default withRouter( Index );