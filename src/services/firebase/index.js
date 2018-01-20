import firebase from 'firebase';
import config from './config';

export const initialize = () => new Promise((resolve) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  auth.useDeviceLanguage();
  auth.onAuthStateChanged(resolve);
});
