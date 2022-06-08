import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbX-twVW5HBpHfxQZGJcPrB7Ayk2XsCw8",
  authDomain: "twitter-clone-766db.firebaseapp.com",
  projectId: "twitter-clone-766db",
  storageBucket: "twitter-clone-766db.appspot.com",
  messagingSenderId: "1036455208289",
  appId: "1:1036455208289:web:b5baf15dde655d65d55120",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;