class Modules {
  modules = [];

  installModule = (module) => {
    this.modules.push(module);
  }
}

export default window.modules = new Modules();
