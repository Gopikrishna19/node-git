import React, {Component, PropTypes} from 'react';
import Master from './master';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {getStore} from './store';
import theme from './shared/styles/theme';

export default class extends Component {
  static displayName = 'AppProvider';
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor() {
    super();
    this.state = {
      deviceWidth: 0
    };
  }

  componentWillMount() {
    this.setWidth();
  }

  componentDidMount() {
    window.addEventListener('resize', this::this.setWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this::this.setWidth);
  }

  setWidth() {
    this.setState({deviceWidth: document.body.clientWidth});
  }

  render() {
    return <Provider store={getStore()}>
      <MuiThemeProvider muiTheme={theme}>
        <Master deviceWidth={this.state.deviceWidth}>
          {this.props.children}
        </Master>
      </MuiThemeProvider>
    </Provider>;
  }
}
