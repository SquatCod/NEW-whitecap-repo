import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/Whitecap.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';

const index = ({ userPhoto }) => {
    return (
        <div className='header'>
            <div className="header__logo">
            <img src={GDriveLogo} alt=""/>
            <span>ROV Upload Center</span>
        </div>
            <div className="header__searchContainer">
            <div className="header__searchBar">
            <SearchIcon />
            <input type='text' placeholder='Search in Drive' />
            <ExpandMoreIcon />
        </div>    
            <div className="heder__icons">
            
            <span>
               
            </span>

            
            <img src="" class="Google" alt="" />
        </div>
    </div>  
    </div>  
    )
}

export default index
