class Packager {
  constructor() {
    this.coreModules = [
      require('./modules/ModuleInstaller').default,
      require('@the-tab/the-tab-core-bookmarks').default,
    ];
    this.modules = [];
  }
}

export default window.modules = new Packager();
