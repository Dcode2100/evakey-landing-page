// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6BJ56TkK8uACbAImLgIVSjUeamENYEDk",
  authDomain: "evakey-d1ea6.firebaseapp.com",
  projectId: "evakey-d1ea6",
  storageBucket: "evakey-d1ea6.firebasestorage.app",
  messagingSenderId: "71407915882",
  appId: "1:71407915882:web:e59edb6b03444a6db84b13",
  measurementId: "G-63RDWZ9VZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);