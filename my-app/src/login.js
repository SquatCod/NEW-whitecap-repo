import React from 'react'

import firebase from 'firebase'

import { signUp, signIn, signOut } from './firebase'


export default function Login() {


    //nextPage function
    function nextPage(){

        const nextPageButton = document.getElementById("nextPage")

        firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            nextPageButton.disabled = false;
        }else{
            nextPageButton.disabled = true;
        }
        })

        window.location.href = '/userApp'
  }


    return (
        <div>
            Enter Credentials Here:
            <input type="email" placeholder="email here" id="email" /><br/>
            <input type="password" placeholder="password here" id="password" /><br/>
            <button onClick={signUp} id="signUp">Sign Up</button>
            <button onClick={signIn} id="signIn">Sign In</button>
            <button onClick={nextPage} id="nextPage">Next Page</button>
            <button onClick={signOut} id="signOut">Sign Out</button>
        </div>
    )
}
