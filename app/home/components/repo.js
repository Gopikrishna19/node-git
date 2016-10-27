import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import React, {PropTypes} from 'react';

const Repo = props => {
  const commit = props.commits[0];

  return <Card style={{marginBottom: 25}}>
    <CardTitle
      title={props.name}
    />
    {
      commit ?
        <CardHeader
          subtitle={`${commit.relativeTime} (${commit.commit})`}
          title={`Last commit by ${commit.author}`}
        /> : <CardText>No commits yet</CardText>
    }
  </Card>;
};

Repo.displayName = 'Repo';
Repo.propTypes = {
  commits: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default Repo;

