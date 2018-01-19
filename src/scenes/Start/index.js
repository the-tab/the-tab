import React, { Component } from 'react';

import './style.less';
import Bookmarks from './components/Bookmarks';

export default class StartScene extends Component {
  state = {
    bottom: 0,
  }

  componentDidMount() {
    document.documentElement.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('wheel', this.handleScroll);
  }

  handleScroll = ({ movementY }) => {
    this.setState(({ bottom }) => ({
      bottom: bottom + movementY * 3,
    }))
  }

  render() {
    return (
      <div id="start_scene">
        <div id="start_scene_main_panel">
          <h2>Scroll down</h2>
        </div>
        <Bookmarks bottom={this.state.bottom} />
      </div>
    );
  }
}
