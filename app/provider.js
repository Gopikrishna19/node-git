import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {getStore} from './store';

const AppProvider = props =>
  <Provider store={getStore()}>
    {props.children}
  </Provider>;

AppProvider.displayName = 'AppProvider';
AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
