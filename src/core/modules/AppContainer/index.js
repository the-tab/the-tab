import React, { Component } from 'react';

import styles from './styles.less';

export default class AppContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        { this.props.children }
      </div>
    );
  }
}
