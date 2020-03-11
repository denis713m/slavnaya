import React, { Component, lazy, Suspense }       from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const TestPage = lazy( () => import('./pages/TestPage.js') );
const SignUpPage = lazy( () => import( './pages/SignUpPage.js' ) );
const SignInPage = lazy( () => import( './pages/SignInPage.js' ) );
const HomePage = lazy( () => import( './pages/HomePage.js' ) );

const fallbackElem = <div className='loader'>Loading...</div>;

export const ThemeContext = React.createContext( 'light' );

class App extends Component {

  constructor (props) {
    super( props );
    this.state = {
      theme: 'light',
    };

  }

  changeTheme = () => {
    this.setState( state => ({
      theme: state.theme === 'light'
             ? 'dark'
             : 'light'
    }) );
  };

  render () {
    return (
      <ThemeContext.Provider value={{
        changeTheme: this.changeTheme,
        theme: this.state.theme,
      }}>
        <Router>
          <Suspense fallback={fallbackElem}>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
              <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
              <Route path={['/test']} component={TestPage}/>
            </Switch>
          </Suspense>
        </Router>
      </ThemeContext.Provider>
    );
  }
}

export default App;
