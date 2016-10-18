import {combineReducers, createStore} from 'redux';
import {reducers as master} from './master/store';

let store;

export const getStore = () => {
  if (!store) {
    store = createStore(
      combineReducers({
        ...master
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  return store;
};
