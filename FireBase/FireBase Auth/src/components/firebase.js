// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1NEESyK0zNtXe2tFDB9K3QUKdEkCaSh8",
  authDomain: "test-login-and-signup-a2dcc.firebaseapp.com",
  projectId: "test-login-and-signup-a2dcc",
  storageBucket: "test-login-and-signup-a2dcc.appspot.com",
  messagingSenderId: "640195622973",
  appId: "1:640195622973:web:a51c839a166340d8145254",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
