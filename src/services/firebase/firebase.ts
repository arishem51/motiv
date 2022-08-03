import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCF5THshspvImdg9GUSMiLT4nfpolK9h7Y",
  authDomain: "motiv-51.firebaseapp.com",
  projectId: "motiv-51",
  storageBucket: "motiv-51.appspot.com",
  messagingSenderId: "886215311036",
  appId: "1:886215311036:web:4243d4a4b169ea1d315ab9",
  measurementId: "G-H0H0KXB26Z",
};
export const InitializeFirebase = () => initializeApp(firebaseConfig);
