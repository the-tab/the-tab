import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './ui-kit/theme';
// scenes
import BookmarksScene from './scenes/Bookmarks';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/bookmarks" component={BookmarksScene} />
      </Switch>
    );
  }
}
