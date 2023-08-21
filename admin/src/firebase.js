// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUATWq9uu1FBtY3k6erUluLRsQG6bd2P8",
  authDomain: "shop-eddef.firebaseapp.com",
  projectId: "shop-eddef",
  storageBucket: "shop-eddef.appspot.com",
  messagingSenderId: "771078471377",
  appId: "1:771078471377:web:fe9aab3d772a0d5ce6cff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;