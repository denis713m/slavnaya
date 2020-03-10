import React, { lazy, Suspense }                  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
const SignUpPage = lazy( () => import( './pages/SignUpPage.js' ) );
const SignInPage = lazy( () => import( './pages/SignInPage.js' ) );
const HomePage = lazy( () => import( './pages/HomePage.js' ) );

const fallbackElem = <div className='loader'>Loading...</div>;

function App () {

  return (
    <Router>
      <Suspense fallback={fallbackElem}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
          <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
