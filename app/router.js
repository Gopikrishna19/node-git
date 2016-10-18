import {IndexRoute, Route, Router, hashHistory} from 'react-router';
import AppProvider from './provider';
import Home from './home';
import NotFound from './master/components/404';
import React from 'react';

const AppRouter = () =>
  <Router history={hashHistory}>
    <Route
      component={AppProvider}
      path='/'
    >
      <IndexRoute component={Home}/>
      <Route
        component={NotFound}
        path='*'
      />
    </Route>
  </Router>;

AppRouter.displayName = 'AppRouter';

export default AppRouter;
