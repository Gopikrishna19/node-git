import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {reducers as home} from './home/store';
import {reducers as master} from './master/store';
import thunk from 'redux-thunk';

let store;

export const getStore = () => {
  if (!store) {
    store = createStore(
      combineReducers({
        ...home,
        ...master
      }),
      {},
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
        applyMiddleware(thunk)
      )
    );
  }

  return store;
};
