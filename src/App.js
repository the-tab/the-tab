import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { create as createJss } from 'jss'
import { JssProvider, ThemeProvider } from 'react-jss'
import vendorPrefixer from 'jss-vendor-prefixer'

import 'normalize.css';
import { theme } from './ui-kit';
// scenes
import BookmarksScene from './scenes/Bookmarks';

const jss = createJss()
jss.use(vendorPrefixer())

export default class App extends Component {
  render() {
    return (
      <JssProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/bookmarks" component={BookmarksScene} />
          </Switch>
        </ThemeProvider>
      </JssProvider>
    );
  }
}
