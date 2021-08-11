import React from 'react'
import './styles.css'

export default function About() {
    return (
        <>
            <br/>
            <div className="title">
                <strong>ROV3D About</strong>
            </div>
            <br/><br/><br/><br/>
            <div class="main_div1">
                <strong>About Whitecap Scientific and the Data Upload Process</strong>
                <hr/>
                At Whitecap Scientific we're creating a world where 3D insight is always
                available to support subsea decisions. We were the first company to bring 
                live video-based 3D reconstruction subsea, and we've been focused on removing
                the operational and commercial complexity that prevents subsea 
                professionals from getting 3D insight whenever they need it.
                <br/><br/></div>
                <div bp="grid 6">
                <div className="main_div1"><img src="/imgs/picture9.png" alt="about-pic1" class="pictures" /><br/><strong>Software</strong><br/><hr/><br/>Whitecap Scientific Corporation's Recon software makes it easy for world’s largest offshore oil and gas companies to make faster, more informed decisions about their subsea operations. It does this by transforming the subsea video already being collected by remotely operated vehicles (ROVs) into real-time 3D data.</div>
                <div className="main_div1"> <img src="/imgs/picture6.jpg" alt="about-pic2" class="pictures" /><br/><strong>Whitecap Scientific's global</strong><br/><hr/><br/> Partnership with Seatronics means you always have access to local project expertise and logistics support. </div>
                <div className="main_div1"> <img src="/imgs/picture7.jpg" alt="about-pic3" class="pictures" /><br/><strong>Whitecap Scientific</strong><br/><hr/><br/> We're creating a world where 3D insight is always available to support subsea decisions. We were the first company to bring live video-based 3D reconstruction subsea, and we've been focused on removing the operational and commercial complexity that prevents subsea professionals from getting 3D insight whenever they need it.</div>
                <div className="main_div1"> <img src="/imgs/picture8.png" alt="about-pic4" class="pictures" /><br/><strong>Global distribution and support.</strong><br/><hr/><br/> Whitecap Scientific's global partnership with Seatronics means you always have access to local project expertise and logistics support.St. John's, Canada Aberdeen, UK Abu Dhabi, UAE Houston, USA Singapore</div> 
                </div>  
            
        </>  
    )
}