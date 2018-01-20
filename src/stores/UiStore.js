import { extendObservable } from 'mobx';
import { createBrowserHistory } from 'history';

export default class UiStore {
  constructor(state = {}) {
    extendObservable(this, {
      history: createBrowserHistory(),
      ready: false,
    }, state);
  }
}
