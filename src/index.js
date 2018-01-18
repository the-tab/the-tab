import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const render = Component => ReactDOM.render(
  <Component />,
  document.getElementById('root')
);

render(App);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    console.log('Accepting the updated APP module!');
    render(require('./App').default);
  })
}
