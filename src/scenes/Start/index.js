import React, { Component } from 'react';

import './style.less';
import Bookmarks from './components/Bookmarks';

export default class StartScene extends Component {
  render() {
    return (
      <div id="start_scene">
        <Bookmarks />
      </div>
    );
  }
}
