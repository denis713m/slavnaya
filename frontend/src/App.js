import React, { lazy, Suspense }                            from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import PrivateRoute                                         from './components/PrivateRoute';
import AccessRoute                                          from './components/AccessRoute';

const SignUpPage = lazy( () => import( './pages/SignUpPage' ) );
const SignInPage = lazy( () => import( './pages/SignInPage' ) );
const HomePage = lazy( () => import( './pages/HomePage' ) );
const DashboardPage = lazy( () => import(  './pages/DashboardPage') );
const AdminPage = lazy( () => import(                            './pages/AdminPage') );

const fallbackElem = <div className='loader'>Loading...</div>;

function App () {

  let user = sessionStorage.getItem( 'user' );

  return (
    <Router>
      <Suspense fallback={fallbackElem}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
          <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
          <PrivateRoute path={'/dashboard'} component={DashboardPage} to={'/sign_up'}/>
          <AccessRoute permissions={['ADMIN']} to={'/'} path={'/admin'} component={AdminPage}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
