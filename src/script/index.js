// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAI3z9mlINBKqd8CIF18LV-y0FJKrV7jms",
authDomain: "site-de-rencontre-b4121.firebaseapp.com",
projectId: "site-de-rencontre-b4121",
storageBucket: "site-de-rencontre-b4121.appspot.com",
messagingSenderId: "863763706178",
appId: "1:863763706178:web:62c3927ca62a30e85e98db",
measurementId: "G-47YFCS49EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function(event){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email, password)
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating User");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error");
      // ..
    });
})