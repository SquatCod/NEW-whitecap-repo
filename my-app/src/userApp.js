import { useState } from 'react';
import './App.css';
import Header from './components/header/index';
import Sidebar from './components/sidebar';
import FilesView from './components/filesView/FilesView';

import { auth, provider } from "./firebase";

function UserApp() {
  const [user, setUser] = useState({
    displayName: "Nick Ford",
    email: "nicholasford0135@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://lh3.googleusercontent.com/ogw/ADea4I61m90xO57JP6r1Fz5cPlnVi9DrYvL7BulwXE3U=s83-c-mo",
  })


  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      
      })
    }
  }

  return (
    <div className="App">
     <Header />

     <div className="app__main">
     <Sidebar />
     <FilesView />
  </div>
  </div>
  );
}

export default UserApp;
