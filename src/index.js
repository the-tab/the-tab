import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { createHashHistory } from 'history';
import { setupRedirect } from 'Utils/chrome';

import stores from './core/stores';
import App from './core/App';

const history = createHashHistory();

ReactDOM.render(
  <AppContainer>
    <Router history={history}>
      <Provider {...stores}>
        <App />
      </Provider>
    </Router>
  </AppContainer>,
  document.getElementById('root'),
);


// for ReactRouter
setupRedirect('index.html', ['index.html', 'bundle.js', 'bundle.js.map']);
