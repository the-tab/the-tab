import { observable } from 'mobx';

import * as auth from '../services/firebase/auth';

export default class UserStore {
  @observable authorized = false;
  @observable user = {};
  @observable isAdmin = false;

  initialize = () => new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.authorized = true;
        this.user = user;
        console.log('USER AUTHORIZED');
      } else {
        this.authorized = false;
        this.user = {};
        console.log('USER UNAUTHORIZED');
      }
      resolve(user);
    });
  });

  signout = () => auth.signOut();
}
