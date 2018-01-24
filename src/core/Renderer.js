import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './modules/AppContainer';

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
            <AppContainer>
              {
              Packager.modules.map(module => (
                <Route
                  path={module.manifest.route}
                  component={module}
                  key={module.id}
                />
              ))
            }
            </AppContainer>
          </Switch>
        </Router>
      ), dest,
    );
  }
}

export default new Renderer();
