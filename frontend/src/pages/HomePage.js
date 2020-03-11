import React, { Component, useState }            from 'react';
import { withRouter }                            from 'react-router';
import { ThemeContext }                          from '../App.js';
import styles                                    from './HomePage.module.scss';
import classNames                                from 'classnames';
import Icon                                      from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';

function ThemeButton () {

  return (
    <ThemeContext.Consumer>
      {
        value => {
          const { theme, changeTheme } = value;
          return (<Icon onClick={changeTheme} path={theme === 'light'
                                                    ? mdiWeatherNight
                                                    : mdiWhiteBalanceSunny} size={'40px'} color={theme === 'light'
                                                                                                 ? 'black'
                                                                                                 : 'white'}/>);
        }
      }
    </ThemeContext.Consumer>
  );
}

class Header extends Component {

  render () {
    const { theme } = this.context;
    const headerClassName = classNames( styles.header, {
      [styles.lightThemeHeader]: theme === 'light',
      [styles.darkThemeHeader]: theme === 'dark',
    } );
    return (
      <header className={headerClassName}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laboriosam.</p>
        <ThemeButton/>
      </header>
    );
  }
}

Header.contextType = ThemeContext;

const HomePage = props => {
  return (
    <Header/>
  );
};

export default withRouter( HomePage );