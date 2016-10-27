import Commit from './commit';
import t from 'tcomb';

export default t.struct({
  commits: t.list(Commit, 'Commits'),
  name: t.String
}, 'Repo');
