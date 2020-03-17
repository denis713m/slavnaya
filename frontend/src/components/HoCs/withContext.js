import AppContext from '../../store';
import React      from 'react';

export default function withContext (WrappedComponent) {
  return (props) => (
    <AppContext.Consumer>
      {
        value => (<WrappedComponent {...value}/>)
      }
    </AppContext.Consumer>
  );
}