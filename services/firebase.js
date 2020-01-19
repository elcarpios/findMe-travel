import * as firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD9DkRDVC0dWXTflBJJAW_NfFJtXjjGOlE',
  authDomain: 'findme-aa416.firebaseapp.com',
  databaseURL: 'https://findme-aa416.firebaseio.com',
  projectId: 'findme-aa416',
  storageBucket: 'findme-aa416.appspot.com',
  messagingSenderId: '624668651136',
  appId: '1:624668651136:web:f1a9373a224398df1ac065',
  measurementId: 'G-Y6YXEXC3JS'
};

const fireApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, fireApp };
