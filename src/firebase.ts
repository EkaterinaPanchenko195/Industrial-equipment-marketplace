import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAtNoYuR54zSOFksUO5yVBSuatkp29uUZk",
  authDomain: "aptint-8da4b.firebaseapp.com",
  databaseURL: "https://aptint-8da4b-default-rtdb.firebaseio.com",
  projectId: "aptint-8da4b",
  storageBucket: "aptint-8da4b.appspot.com",
  messagingSenderId: "125202033417",
  appId: "1:125202033417:web:036105d8011dabb90281d8",
  measurementId: "G-MN1G4XB01F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
