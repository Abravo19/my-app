import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhQE6XHPcSTwvW9jI7WRUjfDAdOWc9PSs",
  authDomain: "mu-app-96d0b.firebaseapp.com",
  projectId: "mu-app-96d0b",
  storageBucket: "mu-app-96d0b.firebasestorage.app",
  messagingSenderId: "676413424541",
  appId: "1:676413424541:web:b04d464127382761fa6574",
  measurementId: "G-JG0ZHYFCMJ"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch {
  auth = getAuth(app);
}

export { db, auth };
