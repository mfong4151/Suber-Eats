import React from 'react'
import {carouselLoader}from '../../utils/imageLoader'
import "../Pickup.css"

const OptionsCarousel = () => {
  const icons = carouselLoader()
  
  return (
    <div className='carousel-body'> 
        {icons.map((icon, idx) => 
        <div className='carousel-cont'>
          <button key={idx} className="carousel-buttons">
            <img className='carousel-image' src={icon.photo} />
            </button> 
          <p className='carousel-button-title'>{icon.title}</p>
        </div> 
        )}

    </div>
  )
}

export default OptionsCarousel