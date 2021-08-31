import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPN4Yna117qq9dvPfDkZv5RgUUUJCnA98",
  authDomain: "gurukul-e9c87.firebaseapp.com",
  projectId: "gurukul-e9c87",
  storageBucket: "gurukul-e9c87.appspot.com",
  messagingSenderId: "686263425083",
  appId: "1:686263425083:web:3f726ca25d07a77910a41e",
  measurementId: "G-QZYJTDREE0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
