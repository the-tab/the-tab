import React, { Component } from 'react';

import './style.less';

export default class Bookmarks extends Component {
  render() {
    return (
      <div
        id="bookmarks_dashboard"
        style={{ top: window.innerHeight - this.props.bottom }}
      />
    );
  }
}
