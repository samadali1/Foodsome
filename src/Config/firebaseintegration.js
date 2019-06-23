import * as firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAlJt0cuec7AYTBfIxLUVBq5bi4yDVUslk",
    authDomain: "foodsome-react.firebaseapp.com",
    databaseURL: "https://foodsome-react.firebaseio.com",
    projectId: "foodsome-react",
    storageBucket: "",
    messagingSenderId: "163335820242",
    appId: "1:163335820242:web:c0bee5b7b4c5cc15"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);