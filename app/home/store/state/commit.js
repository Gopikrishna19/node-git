import t from 'tcomb';

export default t.struct({
  author: t.String,
  commit: t.String,
  commitMessage: t.String,
  commitTime: t.String,
  relativeTime: t.String
}, 'Commit');
