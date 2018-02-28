import * as firebase from 'firebase'; 
  // Initialize Firebase
  var config = {
    //enter your firebase key information
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes');
  
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const twitterProvider = new firebase.auth.TwitterAuthProvider();

