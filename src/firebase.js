import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrGU_ZoSV2hADSODv-8csncwn57OfYU8s",
  authDomain: "clone-c9d80.firebaseapp.com",
  databaseURL: "https://clone-c9d80.firebaseio.com",
  projectId: "clone-c9d80",
  storageBucket: "clone-c9d80.appspot.com",
  messagingSenderId: "885926853379",
  appId: "1:885926853379:web:32a43c4a1c082c7d0ec736",
  measurementId: "G-NTE3NGV619",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //Database initialization
const auth = firebase.auth();

export { db, auth };
