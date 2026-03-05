import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhQE6XHPcSTwvW9jI7WRUjfDAdOWc9PSs",
  authDomain: "mu-app-96d0b.firebaseapp.com",
  projectId: "mu-app-96d0b",
  storageBucket: "mu-app-96d0b.firebasestorage.app",
  messagingSenderId: "676413424541",
  appId: "1:676413424541:web:b04d464127382761fa6574",
  measurementId: "G-JG0ZHYFCMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });

export { db, auth };
