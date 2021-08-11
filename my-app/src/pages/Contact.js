import React from 'react'

import { Link } from "react-router-dom"
import {
    EmailIcon,
    FacebookIcon,
    RedditIcon,
    TumblrIcon,
    TwitterIcon
  } from "react-share";

export default function Contact() {
    return (
        <>
            <br/>
            <div className="title">
                <strong>ROV3D Contact</strong>
            </div>

            <div bp="grid 4@lg" >
                <br/><br/><br/>
                <div class="main_div1">
                    
                    Contact Information

                    if you would like to contact us for any<br/>
                    further information you can reach us at<br/>
                    <strong>Watersub@rov3d.com</strong><br/>OR<br/><strong>+1(709)694-2841</strong><br/>
                    If there are any problems you would<br/>like to report type it in the box below
                    <br/><br/><br/>
                    <input class="resizedTextbox" type="text" placeholder="Type your comment here" name="report_box"/>
                    <br/>
                    <Link to="/pages/comment_submitted"><button type="submit" id="submit" name="conSubmit">Submit</button></Link>
                </div>
            </div>
            <br/><br/><br/>
            <strong>Follow us on our social medias to always stay up to date with our website.</strong><br/><br/><hr/>
            <a href="https://twitter.com/rov3d?lang=en"><TwitterIcon size={70} round={true} class="paddingstyle" /></a>
            <a href="https://www.facebook.com/"><FacebookIcon size={70} round={true} class="paddingstyle"/></a>
            <a href="https://outlook.live.com/"><EmailIcon size={70} round={true} class="paddingstyle"/></a>
            <a href="https://www.reddit.com/r/rov/"><RedditIcon size={70} round={true} class="paddingstyle"/></a>
            <a href="https://www.tumblr.com/"><TumblrIcon size={70} round={true} class="paddingstyle"/></a>
            <hr/>
        </>
    )
}
