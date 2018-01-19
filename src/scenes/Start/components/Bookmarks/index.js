import React, { Component } from 'react';

import './style.less';

export default class Bookmarks extends Component {
  render() {
    const { bottom } = this.props;
    const { innerHeight } = window;

    return (
      <div id="bookmarks_dashboard" style={{ top: innerHeight - bottom }}>

      </div>
    );
  }
}
