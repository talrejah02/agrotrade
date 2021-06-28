import firebase from 'firebase/app'
 import 'firebase/storage'
 

var firebaseConfig = {
    apiKey: "AIzaSyCrzP77UoU8EBdhMxDN76-MxHp20vqIMJo",
    authDomain: "gallery-dc49c.firebaseapp.com",
    projectId: "gallery-dc49c",
    storageBucket: "gallery-dc49c.appspot.com",
    messagingSenderId: "1053345336404",
    appId: "1:1053345336404:web:ad665d7b9c9f93e20831c1",
    measurementId: "G-LR3GG998WL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   export const projectStorage = firebase.storage();
   