import React from 'react'
import './header.css'
import background from '../../assets/bg.jpg'


const Header = () => {
  return (
    <div className='header-container'>
      <img src={background} className='header-bg'/>
      <h1>DELIVERING A WEBSITE TO YOU IN EASE</h1>
    </div>
  )
}

export default Header