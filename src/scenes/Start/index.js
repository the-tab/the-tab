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

  appearDistance = 150;

  updateElementTransition = (transition) => {
    const element = document.querySelector('#bookmarks_dashboard');

    if (element) {
      if (element.style.transition !== transition) {
        element.style.transition = transition;
      }
    }
  }

  handleScroll = ({ deltaY }) => {
    const element = document.querySelector('#bookmarks_dashboard');
    const nextPosition = this.state.bottom + (deltaY / 3);

    if (element) {
      if (this.state.bottom > this.appearDistance / 2 && nextPosition <= this.appearDistance / 2) {
        this.updateElementTransition('0.5s');
        this.setState({
          bottom: (nextPosition - this.appearDistance) - (nextPosition - this.appearDistance),
        });
      } else if (nextPosition >= 0) {
        if (this.state.bottom <= 0) {
          this.updateElementTransition('0.5s');
          this.transitionTimeFreezed = true;
          setTimeout(() => {
            this.transitionTimeFreezed = false;
          }, 400);
          this.setState({ bottom: nextPosition + this.appearDistance });
        } else if (!this.transitionTimeFreezed) {
          this.updateElementTransition('0s');
          this.setState({ bottom: nextPosition });
        }
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
