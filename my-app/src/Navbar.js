import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './pages/Themes';
import './pages/styles.css';
import { Link } from "react-router-dom";

const StyledApp = styled.div`

  color: ${(props) => props.theme.fontColor};

  `;

export default function Navbar() {
    
    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
        
    if (theme === 'dark') {
        document.documentElement.style.setProperty('--div_color', '#D4D4D4');
    } else {document.documentElement.style.setProperty('--div_color', '#2B2B2B');}
}
 
    return (
        <>
            <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
                <GlobalStyles />
                <StyledApp>

                <div class="l-nav">
                    <nav class="nav">
                    <ul>
                        <li><a href="#home_div"><img className="logo" src="/imgs/logo.png"></img></a></li>

                        <br/><br/><br/><br/>

                        <li class="nav-primary"><a href="../testing_new_layout">Home</a></li>
                        <li class="nav-primary"><a href="#about_div">About</a></li>
                        <li class="nav-primary"><a href="#contact_div">Contact</a></li>
                        <li class="nav-primary"><a href="../userApp">test</a></li>

                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        
                        <label className="switch">
                            <input type="checkbox" onChange={() => themeToggler()} />
                            <span className="slider round"></span>
                        </label>
                    </ul>
                    </nav>
                </div>

                </StyledApp>
            </ThemeProvider>
        </>
    )
}