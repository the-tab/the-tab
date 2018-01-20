import React, { Component } from 'react';
import getFormData from 'get-form-data';

import AuthForm from './components/AuthForm';
import authorizedRedirect from '../../decorators/authorizedRedirect';

import * as auth from '../../services/firebase/auth';

@authorizedRedirect('/')
export default class Auth extends Component {
  handleRegister = async (e) => {
    e.preventDefault();

    const credentials = getFormData(e.target);

    try {
      if (credentials.password.trim() && credentials.password === credentials.passwordRepeat) {
        await auth.registerWithEmailAndPassword(credentials);
      } else {
        console.warn('Validation error');
      }
    } catch ({ message }) {
      console.warn(message);
    }
  }

  handleLogin = async (e) => {
    e.preventDefault(e);

    const credentials = getFormData(e.target);

    try {
      await auth.signinWithEmailAndPassword(credentials);
    } catch ({ message }) {
      console.warn(message);
    }
  }

  handleGoogleAuth = () => auth.authWithGoogle();

  handleFacebookAuth = () => auth.authWithFacebook();

  handleTwitterAuth = () => auth.authWithTwitter();


  render() {
    return (
      <AuthForm
        handleLogin={this.handleLogin}
        handleRegister={this.handleRegister}
        handleGoogleAuth={this.handleGoogleAuth}
        handleFacebookAuth={this.handleFacebookAuth}
        handleTwitterAuth={this.handleTwitterAuth}
      />
    );
  }
}
