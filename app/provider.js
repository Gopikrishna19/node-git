import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {getStore} from './store';
import theme from './styles/theme';

const Title = () =>
  <span>
    Node
    <b>Git</b>
  </span>;

const AppProvider = props =>
  <Provider store={getStore()}>
    <MuiThemeProvider muiTheme={theme}>
      <div>
        <AppBar title={<Title/>}/>
        {props.children}
      </div>
    </MuiThemeProvider>
  </Provider>;

AppProvider.displayName = 'AppProvider';
AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
