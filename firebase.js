// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4NN_i6oY3MDsy_U2xuIUkqCqGmIsdmkc",
    authDomain: "inventory-management-d2363.firebaseapp.com",
    projectId: "inventory-management-d2363",
    storageBucket: "inventory-management-d2363.appspot.com",
    messagingSenderId: "384611378606",
    appId: "1:384611378606:web:217dbb6590bb9cb95d143f",
    measurementId: "G-GQGBVYQP1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }