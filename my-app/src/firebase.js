import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA60pmoii5s6mWZ2d_EsFYIYGlndG-zMNk",
    authDomain: "wc-firebase.firebaseapp.com",
    databaseURL: "https://wc-firebase-default-rtdb.firebaseio.com",
    projectId: "wc-firebase",
    storageBucket: "wc-firebase.appspot.com",
    messagingSenderId: "5207159066",
    appId: "1:5207159066:web:59632a238fca64d146bca3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const db = firebaseApp.firestore();


  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIn function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }

  //signOut function

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
    }else{
      alert("No Active user Found")
    }
  })


  export { auth, provider, db, storage };
  export {signUp, signIn, signOut};