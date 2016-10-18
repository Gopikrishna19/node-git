import actions from '../actions';

export default (state = false, action) => {
  const reducers = {
    [actions.TOGGLE_DRAWER]: (state, {isOpen}) => isOpen
  };
  const reducer = reducers[action.type];

  return reducer ? reducer(state, action) : state;
};
