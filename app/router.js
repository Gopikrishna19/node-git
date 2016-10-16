import {Route, Router, browserHistory} from 'react-router';
import AppProvider from './provider';
import React from 'react';

const AppRouter = () =>
  <Router history={browserHistory}>
    <Route
      component={AppProvider}
      path='/'
    />
    <Route
      component={() => <div>404 Not Found</div>}
      path='*'
    />
  </Router>;

AppRouter.displayName = 'AppRouter';

export default AppRouter;
