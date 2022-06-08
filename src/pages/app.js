// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTEOFA6ZYl1zrLxvIQGTQppKDDgIzqChM",
    authDomain: "chaehyun0704-66cd4.firebaseapp.com",
    databaseURL: "https://chaehyun0704-66cd4-default-rtdb.firebaseio.com",
    projectId: "chaehyun0704-66cd4",
    storageBucket: "chaehyun0704-66cd4.appspot.com",
    messagingSenderId: "268362161292",
    appId: "1:268362161292:web:d7102c1fbdf73ebc9e2fa9",
    measurementId: "G-9KR3XQH6JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);