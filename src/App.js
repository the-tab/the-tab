import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './ui-kit/theme';

// services
import * as firebase from './services/firebase';
// scenes
import StartScene from './scenes/Start';

export default class App extends Component {
  state = {
    ready: false,
  }

  async componentWillMount() {
    await firebase.initialize();
    this.setState({
      ready: true,
    });
  }

  render() {
    if (this.state.ready) {
      return (
        <Switch>
          <Route exact path="/" component={StartScene} />
        </Switch>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}
