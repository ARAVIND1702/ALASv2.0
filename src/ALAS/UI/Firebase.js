import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
const firebaseConfig = {
    apiKey: "AIzaSyDBYfRS7skwAHY_AbbMdmEf_DpchJgzok4",
    authDomain: "alas-a71c9.firebaseapp.com",
    databaseURL: "https://alas-a71c9-default-rtdb.firebaseio.com",
    projectId: "alas-a71c9",
    storageBucket: "alas-a71c9.appspot.com",
    messagingSenderId: "277046434102",
    appId: "1:277046434102:web:84eff6d102892cf45b3b97",
    measurementId: "G-H3HGLR05BN"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataRef = firebase.database();
  export default firebase;