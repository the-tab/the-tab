import React, { Component } from 'react';
import { observer } from 'mobx-react';
import * as Icon from 'react-feather';

import styles from './styles.less';

@observer
export default class ModuleInstaller extends Component {
  static manifest = require('./manifest.json');
  static id = 'core-module-installer';

  render() {
    return (
      <div className={styles.container}>

        <div className={styles.banner}>
          <Icon.Package />
        </div>

        <div className={styles.panel}>
          <div className={styles.panelItem}>Themes</div>
          <div className={styles.panelItem}>Extensions</div>
          <div className={styles.panelItem}>Core</div>
        </div>

        {/* <div className={styles.list}>
          { store.modules.map((p, i) => (
            <div className={styles.listItem} key={i}>{ p.package.name }</div>
          )) }
        </div> */}

      </div>
    );
  }
}
