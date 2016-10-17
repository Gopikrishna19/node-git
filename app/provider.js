import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {getStore} from './store';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const Title = () =>
  <span>
    Node
    <b>Git</b>
  </span>;

const AppProvider = props =>
  <Provider store={getStore()}>
    <MuiThemeProvider
      muiTheme={getMuiTheme(lightBaseTheme)}
      showMenuIconButton={false}
    >
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
