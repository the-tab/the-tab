import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';

import App from './App';

const render = Component => void ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <Component />
    </BrowserRouter>
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
global.__REACT_HOT_LOADER__.warnings = false;
