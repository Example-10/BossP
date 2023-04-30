import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyCJ_w5pxxLvZGx5Fag6E7CLJzsHnqATUPY",
  authDomain: "bosspapp-80c6a.firebaseapp.com",
  projectId: "bosspapp-80c6a",
  storageBucket: "bosspapp-80c6a.appspot.com",
  messagingSenderId: "746731420655",
  appId: "1:746731420655:web:d4fd90f981e40afdf9941a"
};

const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref()