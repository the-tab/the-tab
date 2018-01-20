import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import 'normalize.css';
import './ui-kit/theme';

// services
import * as firebase from './services/firebase';
// scenes
import StartScene from './scenes/Start';
import AuthScene from './scenes/Auth';

@withRouter
@inject(a => a)
@observer
export default class App extends Component {
  async componentWillMount() {
    await firebase.initialize();
    await this.props.user.initialize();
    this.props.ui.ready = true;
  }

  render() {
    if (this.props.ui.ready) {
      if (this.props.user.authorized) {
        return (
          <Switch>
            <Redirect from="/auth" to="/" />
            <Route exact path="/" component={StartScene} />
          </Switch>
        );
      } else {
        return (
          <div>
            <Redirect exact to="/auth/login" />
            <Route
              path="/auth"
              component={AuthScene}
            />
          </div>
        );
      }
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}
