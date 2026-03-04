import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4XLnRI7zIRc2xnkSpj1kkk-qEkkXiOM",
  authDomain: "foundit-e6d39.firebaseapp.com",
  projectId: "foundit-e6d39",
  storageBucket: "foundit-e6d39.firebasestorage.app",
  messagingSenderId: "169636403427",
  appId: "1:169636403427:web:bb745e38def8690ea00dd6",
  measurementId: "G-T30WLJNQ2P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.registerUser = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created successfully!"))
    .catch(error => alert(error.message));
};

window.loginUser = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login successful!"))
    .catch(error => alert(error.message));
};

