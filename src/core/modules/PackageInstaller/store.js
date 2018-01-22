import { observable, action, computed } from 'mobx';

class PackageStore {
  @observable all = [];

  @computed get themes() {
    return this.all.filter(m => m.package.name.match(/the-tab-package-(.*)/));
  }

  @computed get packages() {
    return this.all.filter(m => m.package.name.match(/the-tab-package-(.*)/));
  }

  @computed get core() {
    return this.all.filter(m => m.package.name.match(/the-tab-core-(.*)/));
  }

  @action getPackages = () => {
    fetch('http://registry.npmjs.org/-/v1/search?text=the-tab-*')
      .then(res => res.json())
      .then(p => p.objects)
      .then(p => p.filter(n => n.package.name.match(/the-tab-(.*)/)))
      .then((packages) => {
        this.all = packages;
      });
  }
}

export default window.packages = new PackageStore();
