import React               from 'react';
import PropTypes           from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import withContext         from '../HoCs/withContext.js';

const PrivateRoute = ({ to, user, setUser, ...rest }) => {

  return (
    user
    ? <Route {...rest}/>
    : <Redirect to={to}/>
  );
};

PrivateRoute.propTypes = {
  to: PropTypes.oneOfType( [
                             PropTypes.string,
                             PropTypes.object,
                           ] ).isRequired,
};

export default withContext( PrivateRoute );