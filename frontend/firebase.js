import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA2JUDLv16syCi9ERgzT1sdKhy_dpLqBXU",
  authDomain: "sephora-digital-simple-site.firebaseapp.com",
  databaseURL: "https://sephora-digital-simple-site.firebaseio.com",
  projectId: "sephora-digital-simple-site",
  storageBucket: "sephora-digital-simple-site.appspot.com",
  messagingSenderId: "541325518945"
};
firebase.initializeApp(config);

export const firebaseDB = firebase.database();

export default firebase;
