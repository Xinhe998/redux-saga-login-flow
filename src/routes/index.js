import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../pages/Home';
import Login from '../pages/Login';
import CommonRoute from './CommonRoute';
import AuthRoute from './AuthRoute';

const history = createBrowserHistory();
const isLogined = !!localStorage.getItem('accessToken');

export default () => (
  <Router history={history}>
    <Switch>
      <CommonRoute isLogined={isLogined} key="login" exact path="/" component={Login} />
      <AuthRoute isLogined={isLogined} key="home" exact path="/home" component={Home} />
    </Switch>
  </Router>
);
