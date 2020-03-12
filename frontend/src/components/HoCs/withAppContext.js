import AppContext from '../../state';
import React      from 'react';

export default function withAppContext (WrappedComponent) {
  function ComponentResult (props) {
    return (
      <AppContext.Consumer>
        {
          value => (<WrappedComponent {...value} {...props}/>)
        }
      </AppContext.Consumer>
    );
  }
  return ComponentResult;
}

