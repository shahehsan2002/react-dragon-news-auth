// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHnl14avegZtZKBbxL3KGA6OWnbJNMGqk",
  authDomain: "react-dragon-news-auth-d15fa.firebaseapp.com",
  projectId: "react-dragon-news-auth-d15fa",
  storageBucket: "react-dragon-news-auth-d15fa.appspot.com",
  messagingSenderId: "246327803000",
  appId: "1:246327803000:web:1d5b020a5f3610120d418d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;