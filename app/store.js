import {combineReducers, createStore} from 'redux';

let store;

export const getStore = () => {
  if (!store) {
    store = createStore(
      combineReducers({
        title: () => 'title'
      })
    );
  }

  return store;
};
