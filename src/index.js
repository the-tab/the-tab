import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const render = Component => void ReactDOM.render(
  <AppContainer>
    <Component />
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
