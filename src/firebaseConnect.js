import {initializeApp} from 'firebase/app';
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRAoWIphRQnPFD8DLOmnAY6K61AttBTNA",
    authDomain: "dashboard-4f98a.firebaseapp.com",
    projectId: "dashboard-4f98a",
    storageBucket: "dashboard-4f98a.appspot.com",
    messagingSenderId: "607609018717",
    appId: "1:607609018717:web:dd4614a68ac2dd267cf0b4",
    measurementId: "G-SYJYRJD96D"
  };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);