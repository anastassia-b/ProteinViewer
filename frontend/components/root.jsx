import React from 'react';
import { Provider } from 'react-redux';
import Main from './main.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default Root;
