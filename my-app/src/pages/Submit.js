import React from 'react'
import { Link } from "react-router-dom";

function bruhmode() {
    setTimeout(function Submit(){ window.location="Upload_Results"; },4000);
}

export default function Submit() {
    bruhmode()
    return (
         <>
            <div class="progress">
                <div class="color"></div>
            </div>

            <div>
                <Link to="/pages/File_upload"><input id="submit_button" className="button" type="submit" value="cancel"/></Link>
            </div>
        </>
    )
}
