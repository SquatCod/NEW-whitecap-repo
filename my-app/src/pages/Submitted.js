import React, { useState } from 'react';

import { Link } from "react-router-dom"

export default function Submitted() {
    return (
        <>
            <div className="title">
                ROV3D Upload
            </div>

            <div bp="grid 4">

                <div> </div>

                <div className="main_div1">
                    File Uploaded Successfully ✔

                    <br/><br/><br/>

                    <Link to="/pages/CreateNote"><button id="submit_button" className="button" type="submit" value="Login">Upload Another File</button></Link><br/><br/>
                    <Link to="/pages/Home"><button id="submit_button" className="button" type="submit" value="homebutton">Return Home</button></Link>
                </div>

                <div> </div>
                
            </div>
        </>
    )
}
