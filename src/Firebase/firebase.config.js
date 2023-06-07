// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMLNPbIak1dUUuNIGFzq7VntgH-TDIra4",
  authDomain: "sports-academy-special.firebaseapp.com",
  projectId: "sports-academy-special",
  storageBucket: "sports-academy-special.appspot.com",
  messagingSenderId: "533263183738",
  appId: "1:533263183738:web:101c0cc002f68786b1b0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app