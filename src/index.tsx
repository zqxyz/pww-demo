import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ot-fCaaI45Rh6xnNNA_d5gKitXKXSlg",
  authDomain: "pww-demo-scrfa.firebaseapp.com",
  projectId: "pww-demo-scrfa",
  storageBucket: "pww-demo-scrfa.appspot.com",
  messagingSenderId: "369860469663",
  appId: "1:369860469663:web:e8811a80545190331e13aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
