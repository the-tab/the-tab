import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'normalize.css';
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
