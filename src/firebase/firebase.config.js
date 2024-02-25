// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn19oMfM6_n34q8L_iS9Hq6Dcl_b1ifFU",
  authDomain: "hat-bazar-eb31e.firebaseapp.com",
  projectId: "hat-bazar-eb31e",
  storageBucket: "hat-bazar-eb31e.appspot.com",
  messagingSenderId: "117668849490",
  appId: "1:117668849490:web:af80b7c088deda12b9fc8b",
  measurementId: "G-3PG8LGVK0G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export default app;
