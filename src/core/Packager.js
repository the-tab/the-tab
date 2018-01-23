class Packager {
  constructor() {
    this.modules = [
      require('./modules/ModuleInstaller').default,
      require('@the-tab/the-tab-core-bookmarks').default,
    ];
  }

  install = async (url) => {
    await fetch(url).then(res => res.text()).then((script) => {
      this.modules.push(eval(script).default);
    });
  }
}

export default window.modules = new Packager();
