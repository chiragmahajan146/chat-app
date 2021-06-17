import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCyfc0wwF1_h15FOqZA2ZF_jpeeESUbEf0',
  authDomain: 'chat-web-app-425f7.firebaseapp.com',
  databaseURL: 'https://chat-web-app-425f7-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-425f7',
  storageBucket: 'chat-web-app-425f7.appspot.com',
  messagingSenderId: '931835060990',
  appId: '1:931835060990:web:07fdabe9389135be963baf',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
