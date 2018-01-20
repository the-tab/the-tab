import { extendObservable } from 'mobx';

export default class UiStore {
  constructor(state = {}) {
    extendObservable(this, {
      ready: false,
    }, state);
  }
}
