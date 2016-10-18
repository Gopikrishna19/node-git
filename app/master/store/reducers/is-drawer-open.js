import actions from '../actions';

export default (state = false, action) => {
  const reducers = {
    [actions.CLOSE_DRAWER]: () => false,
    [actions.OPEN_DRAWER]: () => true
  };
  const reducer = reducers[action.type];

  return reducer ? reducer(state, action) : state;
};
