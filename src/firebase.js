// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-MW6rFbCKzt5yiNmz-FQ_4V642934cVo",
    authDomain: "disney-plus-clone-399ab.firebaseapp.com",
    projectId: "disney-plus-clone-399ab",
    storageBucket: "disney-plus-clone-399ab.appspot.com",
    messagingSenderId: "558627488097",
    appId: "1:558627488097:web:9d811a30a4439d604ec520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;