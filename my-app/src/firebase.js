import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDxa1iXCJMp5ohr-WZHmvXarzfB_4FgfEQ",
    authDomain: "drive-project-46075.firebaseapp.com",
    projectId: "drive-project-46075",
    storageBucket: "drive-project-46075.appspot.com",
    messagingSenderId: "640472767921",
    appId: "1:640472767921:web:a632b543a6d9717ff73190"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export { auth, provider, db, storage }