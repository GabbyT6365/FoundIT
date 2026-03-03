import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

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

export const auth = getAuth(app);
export const db = getFirestore(app);
