// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestone'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqW7cwgxId5g3KmZICa763rvjzmflaRHM",
  authDomain: "reactjs-brizio.firebaseapp.com",
  projectId: "reactjs-brizio",
  storageBucket: "reactjs-brizio.appspot.com",
  messagingSenderId: "1035307742972",
  appId: "1:1035307742972:web:17d5b37a688b803ae04979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
