import React from 'react';
import ReactDOM from 'react-dom';

import Packager from './Packager';

class Renderer {
  render = (dest) => {
    ReactDOM.render((
      <div>
        {
          Packager.modules.map((Module, index) => (
            <Module key={index} />
          ))
        }
      </div>
    ), dest);
  }
}

export default new Renderer();
