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

  handleScroll = ({ wheelDeltaY }) => {
    const nextPosition = this.state.bottom + wheelDeltaY / 5;

    if (nextPosition >= -5) {
      this.setState({ bottom: nextPosition })
    }
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
