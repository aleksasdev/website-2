import React from 'react'
import './header.css'
import background from '../../assets/bg.jpg'
import smallTriangle from '../../assets/small-triangle.png'
import pluses from '../../assets/pluses.png'
import circle from '../../assets/circle.png'
import pointingTriangleRight from '../../assets/pointing-triangle-right.png'
import pointingTriangleLeft from '../../assets/pointing-triangle-left.png'
import underline from '../../assets/underline.png'
import cubeRight from '../../assets/cube-right.png'
import cubeLeft from '../../assets/cube-left.png'
import trippyTriangleRight from '../../assets/trippy-triangle-right.png'
import trippyTriangleLeft from '../../assets/trippy-triangle-left.png'
import ball from '../../assets/ball.png';

const Header = () => {
  return (
    <div className='header-container'>
      <img src={background} className='header-bg'/>
      <div className='header-first-layer' id='layer'>
        <img src={pluses} className='pluses'/>
        <img src={smallTriangle}/>
        <img src={pluses} className='pluses'/>
      </div>

      {/* Loose assets */}
      <div className='loose-assets-container'>
        <div className='loose-assets-circles' id='loose-assets-items'>
          <img src={circle}/>
          <img src={circle}/>
        </div>

        <div className='loose-assets-pluses' id='loose-assets-items'>
          <img src={pluses}/>
          <img src={pluses}/>
        </div>

        <div className='loose-assets-cubes' id='loose-assets-items'>
          <img src={cubeLeft}/>
          <img src={cubeRight} id='cube-right'/>
        </div>
      </div>

      <div className='loose-assets-trippy-triangles'>
          <img src={trippyTriangleLeft}/>
          <img src={trippyTriangleRight}/>
      </div>

      {/* --Loose assets-- */}

      <div className='header-second-layer' id='layer'>
        <img src={pointingTriangleRight} id='pointing-triangle'/>
        
        <div className='second-layer-text'>
          <h1 className='text-title'>DISCOVER</h1>
          <p className='text-body'>AMAZINGNESS</p>
        </div>

        <img src={pointingTriangleLeft} id='pointing-triangle'/>
      </div>

      <div className='header-third-layer' id='layer'>
        <img src={underline} id='underline' />
      </div>

      <div className='header-fourth-layer' id='layer'>
        
        <div>
          <h2 className='text-subtitle'>WORK WITH ME</h2>
          <p className='text-sub-body'>Reasons why? Because I can produce results, I'm competent and capable to deliver massive amounts of value to you by building you a website or a piece of software, you can truly count on me.</p>
          
          <div className='cta-button-container'>
            <div className='cta-button'>MY WORK</div>
            <p className='cta-second-button'>LEARN MORE</p>
          </div>

          <div className='balls-container'>
            <img src={ball}/>
            <img src={ball}/>
          </div>

          <p className='last-remaining-text'>BE AMAZED</p>
        </div>

      </div>
    </div>
  )
}

export default Header