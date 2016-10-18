import {Link} from 'react-router';
import React from 'react';

const Title = () =>
  <Link to='/'>
    Node
    <b>Git</b>
  </Link>;

Title.displayName = 'Title';

export default Title;
