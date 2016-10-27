import RepoList from './components/repo-list';
import {actionCreators} from './store';
import {connect} from 'react-redux';

export default connect(
  state => ({
    repos: state.repos
  }),
  actionCreators,
  (state, dispatch) => ({
    ...state,
    setRepositories: dispatch.setRepositories
  })
)(RepoList);
