import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function CommonRoute({
  component: Component,
  isLogined,
  ...rest
}) {
  const { path } = rest;
  const render = props => <Component {...props} />;
  if (path === '/' && isLogined) {
    return (
      <Redirect to="/home" />
    );
  }
  return <Route {...rest} render={render} />;
}

CommonRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
  isLogined: PropTypes.bool.isRequired,
};

export default CommonRoute;
