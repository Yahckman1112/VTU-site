// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgWdeZYjV1ZWT5xSkvVCgc0xDE54A733A",
  authDomain: "data-wheel.firebaseapp.com",
  projectId: "data-wheel",
  storageBucket: "data-wheel.appspot.com",
  messagingSenderId: "167700753776",
  appId: "1:167700753776:web:1ca4bab39ee8084cdcf3b5",
  measurementId: "G-QDF3DH3LQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app)