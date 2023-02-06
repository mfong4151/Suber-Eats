import React from 'react'
import {carouselLoader} from '../../utils/imageLoader'
import "../Pickup.css"
import ButtonLeft from '../SVGs/ButtonLeft'
import ButtonRight from '../SVGs/ButtonRight'

const OptionsCarousel = ({filterOptions, setFilterOptions}) => {
  //The .slice is a temporary measure to keep my sanity only
  const icons = carouselLoader().slice(0, 9)

  const handleOnClick = (e, key) =>{
    const newFilterOptions = {...filterOptions}
    e.preventDefault()
    e.stopPropagation()
    newFilterOptions['cuisineType']= key;
    setFilterOptions(newFilterOptions)
  }

  
  return (
    <div id='options-carousel'>
        <div className='carousel-body'> 

          {icons.map((icon, idx) => 
            <div key={idx} className='carousel-cont' onClick={e =>handleOnClick(e, icon.key)}>
              <button className="carousel-buttons" >
                <img className='carousel-image' src={icon.photo} />
              </button> 
            <p className='carousel-button-title'>{icon.title}</p>
          </div> 
        )} 

        </div>
        <div className='carousel-lr-cont'>
            <button className="carousel-lr-btn udc">
                <ButtonLeft/>
            </button>
            <button className="carousel-lr-btn udc" id="carousel-r-btn">
              <ButtonRight/>
            </button> 
        </div>
        
    </div>
  

  )
}

export default OptionsCarousel