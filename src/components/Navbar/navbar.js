import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-button'>LOGO</div>
        <div className='nav-buttons-container'>
          <div id='nav-button'>HOME</div>
          <div id='nav-button'>WORK</div>
          <div id='nav-button'>CONTACT</div>

        </div>
        <div className='navbar-button'>Test</div>
    </div>
  )
}

export default Navbar