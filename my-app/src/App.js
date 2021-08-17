import React from 'react';

import Splash from './index'; 
import { Route } from "react-router-dom";

import UserApp from './userApp';
import Login from './login';

export default function App() {
  
  return (
    
    <>
    

      <body>

        <useWindowSize />
  
        <Route exact path="/userApp" component={UserApp}/>
        <Route exact path="/login" component={Login}/>
      
      </body>
    </> 
  )
}

