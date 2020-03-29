import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import CommonRoute from './CommonRoute';

function AuthRoute({
  component: Component,
  isLogined,
  ...rest
}) {
  const render = props => <Component {...props} />;
  if (isLogined) {
    return (
      <CommonRoute {...rest} isLogined={isLogined} component={render} />
    );
  }
  return <Redirect to="/" />;
}

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired,
  isLogined: PropTypes.bool.isRequired,
};

export default AuthRoute;
