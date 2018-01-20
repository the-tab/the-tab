import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';

import stores from './stores';

import App from './App';

const history = createBrowserHistory();

const render = Component => void ReactDOM.render(
  <AppContainer>
    <Router history={history}>
      <Provider {...stores}>
        <Component />
      </Provider>
    </Router>
  </AppContainer>,
  document.getElementById('root'),
);

render(App);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    console.log('Accepting the updated APP module!');
    render(require('./App').default);
  });
}


// disable Hot Loader warnings
// global.__REACT_HOT_LOADER__.warnings = false;
