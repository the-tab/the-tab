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

  appearDistance = 200;

  handleScroll = (e) => {
    console.log(e);
    const nextPosition = this.state.bottom + (-e.wheelDeltaY / 5);

    if (this.state.bottom > this.appearDistance && nextPosition <= this.appearDistance) {
      this.setState({
        bottom: (nextPosition - this.appearDistance) - (nextPosition - this.appearDistance),
      });
    } else if (nextPosition >= 0) {
      if (this.state.bottom <= 0) {
        this.setState({ bottom: nextPosition + this.appearDistance });
      } else {
        this.setState({ bottom: nextPosition });
      }
    }

    const { innerHeight } = window;
    const element = document.querySelector('#bookmarks_dashboard');

    if (element) {
      if (nextPosition < this.appearDistance) {
        element.style.transition = '0.5s';
      } else if (innerHeight - parseInt(element.style.top, 10) > this.appearDistance) {
        element.style.transition = '0s';
      }
    }
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
