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


const Header = () => {
  return (
    <div className='header-container'>
      <img src={background} className='header-bg'/>
      <div className='header-first-layer' id='layer'>
        <img src={pluses}/>
        <img src={smallTriangle}/>
        <img src={pluses}/>
      </div>

      <div className='circle-container'>
        <div className='circle-container-for-pluses'>
          <img src={circle} id='circle'/>
          <img src={pluses} id='circle-container-pluses'/>
        </div>
        <div className='circle-container-for-pluses'>
          <img src={circle} id='circle'/>
          <img src={pluses} id='circle-container-pluses'/>
        </div>
      </div>

      <div className='header-second-layer' id='layer'>
        <img src={pointingTriangleRight} id='pointing-triangle'/>
        
        <div className='second-layer-text'>
          <h1 className='text-title'>DISCOVER</h1>
          <p className='text-body'>AMAZINGNESS</p>
        </div>

        <img src={pointingTriangleLeft} id='pointing-triangle'/>
      </div>

      <div className='header-third-layer' id='layer'>
        <img src={cubeLeft} id='cube'/>
        <img src={underline} id='underline' />
        <img src={cubeRight} id='cube'/>
      </div>

      <div className='header-fourth-layer' id='layer'>
        <img src={trippyTriangleLeft} id='trippy-triangle'/>
        <div>
          <h2 className='text-subtitle'>WORK WITH ME</h2>
          <p className='text-sub-body'>You really should just because I said so. Bla bla bla</p>
          <div className='cta-button-container'>
            <div className='cta-button'>MY WORK</div>
          </div>
        </div>
        <img src={trippyTriangleRight} id='trippy-triangle'/>
      </div>
    </div>
  )
}

export default Header