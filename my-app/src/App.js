import React from 'react';

import './pages/styles2.scss';

import testing_New_Layout from './testing_new_layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Home from './pages/Home';
import Submit from'./pages/Submit';
import useMediaQuery from './pages/useMediaQuery';
import Login2 from './pages/login_test';
import CreateNote from './pages/CreateNote';
import Submitted from './pages/Submitted';
import Comment_Submitted from './pages/comment_submitted';
import Splash from './index'; 
import { Route } from "react-router-dom";
import { ProgressBar } from './pages/progress_bar_test.js';
import UserApp from './userApp';




export default function App() {

  const match = useMediaQuery("(min-width: 1600px)");
  
  return (
    
    <>
      <body>
    
        {match ? document.documentElement.style.setProperty('--navbar-color','#444') : document.documentElement.style.setProperty('--navbar-color','#01579b')}
        {match ? document.documentElement.style.setProperty('--div_color','gray') : document.documentElement.style.setProperty('--div_color','#0277BD')}

        <Navbar />
        <Splash />

        <useWindowSize />
        <Route exact path="/pages/About" component={About} />
        <Route exact path="/pages/Contact" component={Contact} />
        <Route exact path="/pages/Home" component={Home} />
        <Route exact path="/pages/Submit" component={Submit} />
        <Route exact path="/pages/progress_bar_test" component={ProgressBar} />
        <Route exact path="/pages/login_test" component={Login2} />
        <Route exact path="/pages/CreateNote" component={CreateNote} />
        <Route exact path="/pages/Submitted" component={Submitted} />
        <Route exact path="/testing_new_layout" component={testing_New_Layout} />
        <Route exact path="/pages/comment_submitted" component={Comment_Submitted} />
        <Route exact path="/userApp" component={UserApp}/>
      </body>
    </> 
  )
}

