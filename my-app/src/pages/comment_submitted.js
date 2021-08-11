import React, { useState } from 'react';

import { Link } from "react-router-dom"

export default function Comment_Submitted() {
    return (
        
        <div bp="grid 4">

            <div> </div>

            <div className="main_div1">
                Comment submitted successfully ✓

                <br/><br/><br/>

                <Link to="/testing_new_layout"><button id="submit_button" className="button" type="submit" value="homebutton">Return Home</button></Link>
            </div>

            <div> </div>
            
        </div>
    )
}