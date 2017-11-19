import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Main from './components/main.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
