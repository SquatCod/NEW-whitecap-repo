import React from 'react'
import './styles2.scss'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <br/>
            <div className="title">
                <strong>ROV3D Home</strong>
            </div>

            <div bp="grid 3@lg 4@md">
                <div className="main_div2">
                    <strong><b>Welcome to the ROV3D website.</b></strong>
                    <hr/>
                    <br/>
                    Here, you can upload your ROV3D .mp4 files to our official server.
                    <br/><br/>
                    Please click the login button to proceed
                    <br/><br/>
                    <Link to="/pages/login_test"><button id="submit_button" className="button" type="submit" value="Login">Login</button></Link>
                </div>

            </div>
            <div  bp="grid 6">
                <div className="main_div1"><img src="/imgs/picture2.png" alt="whitecap-pic1" class="pictures" /><br/><strong>No special sensors</strong><br/><hr/><br/>Mount two off-the-shelf cameras side-by-side on any class of ROV.</div>

                <div className="main_div1"><img src="/imgs/picture3.png" alt="whitecap-pic2" class="pictures" /><br/><strong>No Offshore Technicians</strong><br/><hr/><br/>Existing personnel complete online training in two hours.</div>
                
                <div className="main_div1"><img src="/imgs/picture4.jpg" alt="whitecap-pic3" class="pictures" /><br/><strong>No Workflow Disruptions</strong><br/><hr/><br/>Collect data at GVI inspection distances and speeds.</div>
                
                <div className="main_div1"><img src="/imgs/picture5.jpg" alt="whitecap-pic4" class="pictures" /><br/><strong>No Waiting for Results</strong><br/><hr/><br/>Review and export client deliverables without post-processing</div>
            </div>
        </>
    )
}
