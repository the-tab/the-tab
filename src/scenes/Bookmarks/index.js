import React, { Component } from 'react';

import { Button } from '../../ui-kit';

export default class Bookmarks extends Component {
  render() {
    return (
      <div>
        <h1>Some nice title</h1>
        <h2>Some nice title</h2>
        <h3>Some nice title</h3>
        <h4>Some nice title</h4>
        <Button primary>Primary button</Button>
        <Button link>Link button</Button>
        <Button danger>Danger button</Button>
      </div>
    );
  }
}
