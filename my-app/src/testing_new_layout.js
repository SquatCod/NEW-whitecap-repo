import React from 'react'
import './pages/styles2.scss'

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

export default function testing_New_Layout() {

    return (
        <div>
            <div class="l-site">
                <div class="l-page">
                    <div class="menu">
                    <div class="menu-hamburger"></div>
                    </div>
                    <section class="band band-a">
                    <div class="band-container">
                        <div id="home_div"class="band-inner">
                            <Home />
                        </div>
                    </div>
                    </section>
                    <section class="band band-b">
                    <div class="band-container">
                        <div id="about_div" class="band-inner">
                            <About />
                        </div>
                    </div>
                    </section>
                    <section class="band band-c">
                    <div class="band-container">
                        <div id="contact_div" class="band-inner">
                            <Contact />
                        </div>
                    </div>
                    </section>
                </div>
                </div>
            </div>
    )
}
