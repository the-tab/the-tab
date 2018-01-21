import React, { Component } from 'react';

import './style.less';
import Bookmarks from './components/Bookmarks';

export default class StartScene extends Component {
  render() {
    return (
      <div id="start_scene">
        <div id="start_scene_main_panel">
          <h2>Scroll down</h2>
        </div>
        <Bookmarks />
      </div>
    );
  }
}
