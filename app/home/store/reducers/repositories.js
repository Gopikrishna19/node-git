import Repos, {getDefaultState} from '../state';
import actions from '../actions';

export default (state = getDefaultState(), action) => {
  const reducers = {
    [actions.SET_REPOSITORIES]: (state, {repos}) => new Repos(repos)
  };
  const reducer = reducers[action.type];

  return reducer ? reducer(state, action) : state;
};
