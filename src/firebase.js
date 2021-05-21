import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCwR1fzOPExEOlHXA0Qcrx_9SSjH_PKpKE",
  authDomain: "disney-clone-f3e0d.firebaseapp.com",
  projectId: "disney-clone-f3e0d",
  storageBucket: "disney-clone-f3e0d.appspot.com",
  messagingSenderId: "617209500140",
  appId: "1:617209500140:web:79eeb50f0db7831412b0c9",
  measurementId: "G-PP5EFRNYP8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;