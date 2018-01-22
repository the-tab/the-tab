import shortId from 'shortid';

class Packager {
  modules = [];

  registerPackage = (module) => {
    module.id = shortId();
    this.modules.push(module);
  }
}

export default window.modules = new Packager();
