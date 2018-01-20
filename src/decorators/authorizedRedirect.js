import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const authorizedRedirect = url => (WrappedComponent) => {
  @inject('user')
  @observer
  class AuthorizedRedirectWrapper extends Component {
    render() {
      if (this.props.user.authorized) {
        return <Redirect to={url} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  return AuthorizedRedirectWrapper;
};

export default authorizedRedirect;
