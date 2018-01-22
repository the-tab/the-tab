import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Helmet } from 'react-helmet';

import 'normalize.css';
import 'UiKit/theme';

// services
import * as firebase from 'Services/firebase';

// scenes
import AuthScene from 'Scenes/Auth';

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
          <div>
            <Helmet>
              <title>{ this.props.ui.title }</title>
            </Helmet>
            <Switch>
              <Redirect from="/auth" to="/" />
            </Switch>
          </div>
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
