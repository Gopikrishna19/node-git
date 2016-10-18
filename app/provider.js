import React, {PropTypes} from 'react';
import Master from './master';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {getStore} from './store';
import theme from './styles/theme';

const AppProvider = props =>
  <Provider store={getStore()}>
    <MuiThemeProvider muiTheme={theme}>
      <Master>
        {props.children}
      </Master>
    </MuiThemeProvider>
  </Provider>;

AppProvider.displayName = 'AppProvider';
AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
