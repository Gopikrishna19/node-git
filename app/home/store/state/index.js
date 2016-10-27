import Repo from './repo';
import t from 'tcomb';

export default t.list(Repo, 'Repos');

export const getDefaultState = () => [];
