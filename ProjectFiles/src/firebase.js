// Importing firebase module
import firebase from "firebase";

// Firebase configuration details
const firebaseConfig = {
    apiKey: "AIzaSyBv6zEONDVJSxOlkxmyUVto6eWksYVXwSU",
    authDomain: "eshop-c2e0a.firebaseapp.com",
    projectId: "eshop-c2e0a",
    storageBucket: "eshop-c2e0a.appspot.com",
    messagingSenderId: "941031253944",
    appId: "1:941031253944:web:0bc5a43bc9fe9af86e514d",
    measurementId: "G-5BDLQRB305"
};

// Initializing firebase app with the config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creating a firestore database instance
const db = firebaseApp.firestore();

// Creating an auth instance
const auth = firebase.auth();

// Exporting the database and auth instances to be used in other parts of the application
export { db, auth };
