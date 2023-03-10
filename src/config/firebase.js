// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMdMWPix3SdJKeo1yBNKJD95WNq5qjxr0",
  authDomain: "spotify-playlist-generat-bef08.firebaseapp.com",
  projectId: "spotify-playlist-generat-bef08",
  storageBucket: "spotify-playlist-generat-bef08.appspot.com",
  messagingSenderId: "915614477498",
  appId: "1:915614477498:web:31095f9b5c42466ecd6683",
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
