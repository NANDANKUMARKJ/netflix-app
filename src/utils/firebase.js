// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRoexPMzDmZOyOoyVSACqdUXywuIUQG3A",
  authDomain: "netflix-gpt-2c833.firebaseapp.com",
  projectId: "netflix-gpt-2c833",
  storageBucket: "netflix-gpt-2c833.appspot.com",
  messagingSenderId: "405025675789",
  appId: "1:405025675789:web:6931c36af56924b82a5344",
  measurementId: "G-76H7DN62SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();