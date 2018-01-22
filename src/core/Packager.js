class Modules {
  modules = [];

  registerPackage = (module) => {
    this.modules.push(module);
  }
}

export default window.modules = new Modules();
