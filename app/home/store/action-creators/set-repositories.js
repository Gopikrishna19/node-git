import actions from '../actions';
import fetch from '../../../shared/services/fetch';

export default () =>
  async dispatch => {
    try {
      const repos = await fetch('/repository');

      dispatch({
        repos,
        type: actions.SET_REPOSITORIES
      });
    } catch (e) {
      throw e;
    }
  };
