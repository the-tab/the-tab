import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Input, Button } from '../../../../ui-kit';
import './style.less';

const LoginForm = ({ onSubmit }) => [
  <Helmet key="helmet">
    <meta charSet="utf-8" />
    <title>Bazar Ukraine - Sign In</title>
    <meta name="theme-color" content="#2196F3" />
  </Helmet>,
  <form
    className="auth-form-credentials fadeIn animated"
    onSubmit={onSubmit}
    key="form"
  >
    <Input
      label="Email"
      type="email"
      name="email"
      placeholder="Your email"
    />
    <Input
      label="Password"
      type="password"
      name="password"
      placeholder="Your password"
    />

    <Button type="submit" primary>Log In</Button>
  </form>
]

const RegisterForm = ({ onSubmit }) => [
  <Helmet key="helmet">
    <meta charSet="utf-8" />
    <title>Bazar Ukraine - Sign Up</title>
    <meta name="theme-color" content="#2196F3" />
  </Helmet>,
  <form
    className="auth-form-credentials fadeIn animated"
    onSubmit={onSubmit}
    key="form"
  >
    <Input
      label="Email"
      type="email"
      name="email"
      placeholder="Your email"
    />
    <Input
      label="Password"
      type="password"
      name="password"
      placeholder="Your password"
    />
    <Input
      label="Repeat password"
      type="password"
      name="passwordRepeat"
      placeholder="Repeat your password"
    />

    <Button type="submit" primary>Sign Up</Button>
  </form>
]

const AuthForm = ({ handleLogin, handleRegister, ...props }) => (
  <div id="auth-form-container">
    <div id="auth-form">
      <div id="media-span"></div>
      <div id="mode-select">
        <NavLink to="/auth/login">Sign In</NavLink>
        <NavLink to="/auth/register">Sign Up</NavLink>
      </div>
      <Switch>
        <Route
          exact
          path="/auth"
          render={() => <Redirect exact to="/auth/login" />}
        />
        <Route
          exact
          path="/auth/login"
          render={() => <LoginForm onSubmit={handleLogin} />}
        />
        <Route
          exact
          path="/auth/register"
          render={() => <RegisterForm onSubmit={handleRegister} />}
        />
      </Switch>
      <div className="social">
        <i className="socicon-google" onClick={props.handleGoogleAuth} />
        <i className="socicon-facebook" onClick={props.handleFacebookAuth} />
        <i className="socicon-twitter" onClick={props.handleTwitterAuth} />
      </div>
    </div>
  </div>
)

export default AuthForm;
