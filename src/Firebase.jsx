// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTk0cANqJV6QJ3XJVMW4E8N7DkI_0nlXU",
  authDomain: "komodo-f698f.firebaseapp.com",
  projectId: "komodo-f698f",
  storageBucket: "komodo-f698f.appspot.com",
  messagingSenderId: "1409209695",
  appId: "1:1409209695:web:616ca4d3ddd733cc58d2ea",
  measurementId: "G-YT2TXQ4334",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

export default app