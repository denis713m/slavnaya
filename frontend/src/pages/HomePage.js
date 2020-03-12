import React, { Component } from 'react';
import { withRouter }       from 'react-router';
import { THEME_MODE }       from '../constants/enums.js';
import PageHeader           from '../components/PageHeader';
import withAppContext       from '../components/HoCs/withAppContext.js';
import { withFormik }       from 'formik';

class HomePage extends Component {

  changeTheme = () => {
    const { state: appState, setState: appSetState } = this.props;
    appSetState( {
                   theme: appState.theme === THEME_MODE.LIGHT
                          ? THEME_MODE.DARK
                          : THEME_MODE.LIGHT
                 } );
  };

  addValueToAppState = () => {
    this.props.setState( {
                           items: [1, 2, 3, 4, 5]
                         } );
  };

  render () {

    const appState = this.props.state;

    return (
      <>
        <PageHeader/>
        <h1>{JSON.stringify( appState, null, 4 )}</h1>
        <button onClick={this.changeTheme}>change theme</button>
        <button onClick={this.addValueToAppState}>change app state</button>
      </>
    );
  }
}

export default withRouter( withAppContext( HomePage ) );