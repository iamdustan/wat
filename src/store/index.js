// @flow

import { createStore, combineReducers } from 'redux'
import todos from './todos';
import user from './user';

const store = createStore(
  combineReducers({
    todos,
    user,
  })
);

export default store;
