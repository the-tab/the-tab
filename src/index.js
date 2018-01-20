import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { createHashHistory } from 'history';

import stores from './stores';
import App from './App';

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

chrome.webRequest.onBeforeRequest.addListener((e) => {
  const path = e.url.split('/').slice(-1)[0];
  const exclude = ['index.html', 'bundle.js', 'bundle.js.map'];

  if (!exclude.includes(path)) {
    return {
      redirectUrl: `chrome-extension://${chrome.runtime.id}/index.html`,
    };
  }
}, {
  urls: [`chrome-extension://${chrome.runtime.id}/*`],
}, [
  'blocking',
]);
