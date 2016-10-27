import React, {Component, PropTypes} from 'react';
import Repo from './repo';

export default class extends Component {

  static displayName = 'RepoList';
  static propTypes = {
    repos: PropTypes.array.isRequired,
    setRepositories: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.setRepositories();
  }

  render() {
    return <div>
      <h1>
        Repositories
      </h1>
      {
        this.props.repos.map(
          (repo, index) =>
            <Repo
              {...repo}
              key={index}
            />
        )
      }
    </div>;
  }
}
