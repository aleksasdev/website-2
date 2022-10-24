import React from 'react'
import './header.css'
import background from '../../assets/bg.jpg'
import smallTriangle from '../../assets/small-triangle.png'
import pluses from '../../assets/pluses.png'


const Header = () => {
  return (
    <div className='header-container'>
      <img src={background} className='header-bg'/>
      <div className='header-first-layer' id='layer'>
        <img src={pluses}/>
        <img src={smallTriangle}/>
        <img src={pluses}/>
      </div>

      <div className='header-second-layer' id='layer'>

      </div>
    </div>
  )
}

export default Header