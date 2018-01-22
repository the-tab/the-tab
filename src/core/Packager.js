import shortId from 'shortid';

class Packager {
  constructor() {
    this.packages = [
      require('./modules/ModuleInstaller').default,
    ];
  }

  installModule = (module) => {
    module.id = shortId();
    this.packages.push(module);
  }
}

export default window.modules = new Packager();
