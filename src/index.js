import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import SetIntervalApp from './SetIntervalApp';
/*
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
*/

global.renderItem = item =>
  ReactDOM.render(
    <SetIntervalApp item={item} />,
    document.getElementById('root')
  );

global.renderItem(
  { name: 'This is an item' }
);

