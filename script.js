// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClIZMog5pHLj5mtOSyvWp0R_ikPkumHEs",
  authDomain: "web-site-magestic-x-coded.firebaseapp.com",
  projectId: "web-site-magestic-x-coded",
  storageBucket: "web-site-magestic-x-coded.appspot.com",
  messagingSenderId: "482744177613",
  appId: "1:482744177613:web:352d4fc95c0f3c0eb2aa84",
  measurementId: "G-F9KJL8BL3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);