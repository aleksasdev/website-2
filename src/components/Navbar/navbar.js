import React from 'react'
import './navbar.css'
import fbIcon from '../../assets/fb.png';
import igIcon from '../../assets/ig.png';
import ytIcon from '../../assets/yt.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>

        <div className='navbar-logo'>LOGO</div>
        <div className='nav-buttons-container'>
          <div id='nav-button'>HOME</div>
          <div id='nav-button'>WORK</div>
          <div id='nav-button'>CONTACT</div>

        </div>
        <div className='nav-icons'>
          <img src={fbIcon}/>
          <img src={igIcon}/>
          <img src={ytIcon}/>
        </div>
    </div>
  )
}

export default Navbar