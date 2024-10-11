import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAI3z9mlINBKqd8CIF18LV-y0FJKrV7jms",
    authDomain: "site-de-rencontre-b4121.firebaseapp.com",
    projectId: "site-de-rencontre-b4121",
    storageBucket: "site-de-rencontre-b4121.appspot.com",
    messagingSenderId: "863763706178",
    appId: "1:863763706178:web:62c3927ca62a30e85e98db",
    measurementId: "G-47YFCS49EB"
  };
  const app = initializeApp(firebaseConfig);

  //make authh and firestore references
  const auth = getAuth(app);
  const database = getFirestore(app);

function register() {
    const email = document.getElementById('email').value
    const password = document.getElementById('email').value
    auth.CreateUserWithEmailAndPassword(email, password).then(function() {

        var user = auth.CurrentUser;

        var database_ref = database.ref();
        var user_data = {
            email : email,
            password : password
        }
        database_ref.child('users/' + user.uid).set(user_data);

        alert("User created")
    })
}