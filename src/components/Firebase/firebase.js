import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDnYgqbiwuSxzo7zKW57BAhsDimgCy3hAE",
  authDomain: "russo-photo.firebaseapp.com",
  databaseURL: "https://russo-photo.firebaseio.com",
  projectId: "russo-photo",
  storageBucket: "russo-photo.appspot.com",
  messagingSenderId: "895622101667",
  appId: "1:895622101667:web:87d0d2c388f55e115f5d16",
  measurementId: "G-WC7H8290RZ"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
