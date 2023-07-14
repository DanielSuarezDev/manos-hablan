import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBkdYXkHP3hPGnD8Qx0tqba_GkH1O6j5i8",
    authDomain: "lengua-senas.firebaseapp.com",
    projectId: "lengua-senas",
    storageBucket: "lengua-senas.appspot.com",
    messagingSenderId: "826522955778",
    appId: "1:826522955778:web:b610c268ad8314ff51771b",
    measurementId: "G-NEQ2TCHZ6W"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
