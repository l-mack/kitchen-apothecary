import firebase from 'firebase';
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBBcz7SxXwGS7nqKX6sVn_R5VxIn4ast2M",
    authDomain: "project5-e9638.firebaseapp.com",
    databaseURL: "https://project5-e9638.firebaseio.com",
    projectId: "project5-e9638",
    storageBucket: "project5-e9638.appspot.com",
    messagingSenderId: "898218317733",
    appId: "1:898218317733:web:d2e638974421ddaeabba4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;