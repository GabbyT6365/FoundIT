<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = 
    apiKey: "AIzaSyC4XLnRII7zlRc2xnkSpjIkWk-qEkkXiOM",
    authDomain: "foundit-e6d39.firebaseapp.com",
    projectId: "foundit-e6d39",
    storageBucket: "foundit-e6d39.firebasestorage.app",
    messagingSenderId: "169636403427",
    appId: "1:169636403427:web:bb745e38def8690ea00dd6",
    measurementId: "G-T30WLJNQ2P"
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
// Register Function
window.registerUser = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Login Function
window.loginUser = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
    })
    .catch((error) => {
      alert(error.message);
    });
};