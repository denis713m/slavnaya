import React        from 'react';
import { Provider } from 'react-redux';
import App          from './src/App.js';

const Root = ({ store }) => {
  return (
    <Provider>
      <App/>
    </Provider>
  );
};

export default Root;