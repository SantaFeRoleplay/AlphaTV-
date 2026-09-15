
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzHOtt5dLWIpZ3CReWE99gnvvzPjNTjDE",
  authDomain: "alphatv-ad6c6.firebaseapp.com",
  databaseURL: "https://alphatv-ad6c6-default-rtdb.firebaseio.com",
  projectId: "alphatv-ad6c6",
  storageBucket: "alphatv-ad6c6.firebasestorage.app",
  messagingSenderId: "835760614107",
  appId: "1:835760614107:web:16827f9a7ea082bb56fafe",
  measurementId: "G-4N15KDFT74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
