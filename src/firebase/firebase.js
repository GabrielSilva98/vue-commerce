/* eslint-disable no-unused-vars */
import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDl1MK0NHCloVFkI2N1T4shjm2N3TppHYY",
    authDomain: "vue-commerce-7a615.firebaseapp.com",
    projectId: "vue-commerce-7a615",
    storageBucket: "vue-commerce-7a615.appspot.com",
    messagingSenderId: "426967234957",
    appId: "1:426967234957:web:9dcc86a86c2b17cd52a5c4"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore().settings({ timestampsInSnapshots: true})
 
 export default firebaseApp.firestore()