
import firebase from "firebase/app";
import database from "firebase/database";

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

let firebaseCache;
export const fire = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
