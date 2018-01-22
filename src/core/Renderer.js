import React from 'react';
import ReactDOM from 'react-dom';

import Modules from './Modules';

class Renderer {
  render = (dest) => {
    ReactDOM.render((
      <div>
        {
          Modules.modules.map((Module, index) => (
            <Module key={index} />
          ))
        }
      </div>
    ), dest);
  }
}

export default new Renderer();
