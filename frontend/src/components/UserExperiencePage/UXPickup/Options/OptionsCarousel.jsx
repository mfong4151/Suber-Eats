import React from 'react'
import {carouselLoader} from '../../utils/imageLoader'
import "../Pickup.css"

const OptionsCarousel = () => {
  const icons = carouselLoader().slice(0, 10)
  
  return (
    <div className='carousel-body'> 

        {icons.map((icon, idx) => 

          <div key={idx} className='carousel-cont'>
            <button  className="carousel-buttons">
              <img className='carousel-image' src={icon.photo} />
              </button> 
            <p className='carousel-button-title'>{icon.title}</p>
          </div> 
        )}

    </div>
  )
}

export default OptionsCarousel