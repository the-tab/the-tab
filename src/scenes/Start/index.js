import React, { Component } from 'react';

import './style.less';
import Bookmarks from './components/Bookmarks';

import { handleScroll } from '../../utils/scroll';

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

  handleScroll = (e) => {
    this.setState({
      bottom: handleScroll(e, this.state.bottom, 150, document.querySelector('#bookmarks_dashboard')),
    });
  }

  render() {
    const opacity = Math.min(1 - (this.state.bottom / 500), 1);
    const style = {
      opacity,
      transform: `scale(${Math.min(1 - (this.state.bottom / 10000), 1)})`,
    };
    return (
      <div id="start_scene">
        <div id="start_scene_main_panel">
          <h2 style={style}>Scroll down</h2>
        </div>
        <Bookmarks bottom={this.state.bottom} appearDistance={this.appearDistance} />
      </div>
    );
  }
}
