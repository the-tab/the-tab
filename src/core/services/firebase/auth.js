import firebase from 'firebase';


// email and password auth
export const registerWithEmailAndPassword = async ({ email, password }) => {
  const user = await firebase.auth().createUserWithEmailAndPassword(email, password);

  if (!user.emailVerified) {
    // await user.sendEmailVerification();
    // console.log('Email verification sent!');
  }

  return user;
};

export const signinWithEmailAndPassword = async ({ email, password }) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

// google auth
export const authWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};

// facebook auth
export const authWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};

// twitter auth
export const authWithTwitter = () => {
  const provider = new firebase.auth.TwitterAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};

// auth actions
export const signOut = () => firebase.auth().signOut();


export const onAuthStateChanged = (cb) => {
  firebase.auth().onAuthStateChanged(cb);
};
