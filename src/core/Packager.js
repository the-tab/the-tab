import React from 'react';

class Packager {
  constructor() {
    this.coreModules = [
      require('./modules/ModuleInstaller').default,
      // require('@the-tab/the-tab-core-bookmarks').default,
    ];
    this.modules = [];
  }

  install = async (url) => {
    await fetch(url).then((res) => res.text()).then((script) => {
      this.modules.push(eval(script).default);
    })
  }
}

export default window.modules = new Packager();
