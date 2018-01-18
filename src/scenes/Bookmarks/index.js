import React, { Component } from 'react';

import { Button } from '../../ui-kit';

export default class Bookmarks extends Component {
  render() {
    return (
      <div style={{ padding: '15px' }}>
        <h1>Some nice title</h1>
        <h2>Some nice title</h2>
        <h3>Some nice title</h3>
        <h4>Some nice title</h4>
        <div className="divider" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <div className="divider" />
        <Button primary>Primary button</Button>
        <Button danger>Danger button</Button>
        <Button link>Link button</Button>
      </div>
    );
  }
}
