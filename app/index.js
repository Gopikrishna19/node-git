import AppProvider from './router';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.scss';

injectTapEventPlugin();

ReactDOM.render(<AppProvider/>, document.getElementById('content'));
