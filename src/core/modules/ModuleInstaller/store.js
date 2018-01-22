import { observable, action, computed } from 'mobx';

class ModuleStore {
  @observable modules = [];

  @computed get themes() {
    return this.modules.filter(m => m.package.name.match(/the-tab-package-(.*)/));
  }

  @computed get packages() {
    return this.modules.filter(m => m.package.name.match(/the-tab-package-(.*)/));
  }

  @computed get core() {
    return this.modules.filter(m => m.package.name.match(/the-tab-core-(.*)/));
  }

  @action getModules = () => {
    fetch('http://registry.npmjs.org/-/v1/search?text=the-tab-*')
      .then(res => res.json())
      .then(p => p.objects)
      .then(p => p.filter(n => n.package.name.match(/the-tab-(.*)/)))
      .then((modules) => {
        this.modules = modules;
      });
  }
}

export default window.modules = new ModuleStore();
