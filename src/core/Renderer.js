import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';

import Packager from './Packager';

class Renderer {
  history = window.router = createHashHistory();

  render = (dest) => {
    ReactDOM.render(
      (
        <Router history={this.history}>
          <Switch>
            {
            Packager.packages.map(module => (
              <Route
                path={module.manifest.route}
                component={module}
                key={module.id}
              />
            ))
          }
          </Switch>
        </Router>
      ), dest,
    );
  }
}

export default new Renderer();
