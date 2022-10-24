import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>

        <div className='navbar-logo'>LOGO</div>
        <div className='nav-buttons-container'>
          <div id='nav-button'>HOME</div>
          <div id='nav-button'>WORK</div>
          <div id='nav-button'>CONTACT</div>

        </div>
        <div className='nav-icons'>TEST</div>
    </div>
  )
}

export default Navbar