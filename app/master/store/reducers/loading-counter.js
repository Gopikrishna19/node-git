import actions from '../actions';

const hideProgess = state => {
  if (state === 0) {
    return 0;
  }

  return state - 1;
};
const showProgress = state => state + 1;

export default (state = 0, action) => {
  const reducers = {
    [actions.HIDE_PROGRESS]: hideProgess,
    [actions.SHOW_PROGRESS]: showProgress
  };
  const reducer = reducers[action.type];

  return reducer ? reducer(state, action) : state;
};
