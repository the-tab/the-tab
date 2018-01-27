import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppContainer from './modules/AppContainer';
import Packager from './Packager';

import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';

import api from './api';

class Renderer {
  history = window.router = createHashHistory();

  render = (dest) => {
    ReactDOM.render(
      (
        <Provider {...api}>
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
        </Provider>
      ), dest,
    );
  }
}

export default new Renderer();
