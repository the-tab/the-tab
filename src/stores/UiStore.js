import { extendObservable } from 'mobx';
import { createHashHistory } from 'history';

export default class UiStore {
  constructor(state = {}) {
    extendObservable(this, {
      history: createHashHistory(),
      title: 'The Tab',
      ready: false,
    }, state);
  }
}
