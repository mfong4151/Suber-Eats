import React, { useEffect, useRef } from 'react'
import {carouselLoader} from '../../utils/imageLoader'
import "../Pickup.css"
import ButtonLeft from '../SVGs/ButtonLeft'
import ButtonRight from '../SVGs/ButtonRight'
import { useState } from 'react'

const OptionsCarousel = ({filterState}) => {
  //The .slice is a temporary measure to keep my sanity only
  // const icons = carouselLoader().slice(0, 9)  
  const {filterOptions, setFilterOptions} = filterState;
  const icons = carouselLoader()
  const [window, setWindow] = useState([0, 7])

  
  //For carousel nishant recommends giving width 80% width of parent
  //Then use overflow-x: scroll, and  refer to lines 20-22 in css

  const handleOnClick = (e, key) =>{
    const newFilterOptions = {...filterOptions}
    e.preventDefault()
    e.stopPropagation()
    newFilterOptions['cuisineType']= key;
    setFilterOptions(newFilterOptions)
  }

  const handleLRClick = (e, s) =>{
    e.preventDefault()
    e.stopPropagation()
    if(s === 'left') setWindow(prev => [0, 7])
    else if(s === 'right') setWindow(prev =>[7, 14])
  }


  
  return (
    <div id='options-carousel'>
        <div className='carousel-body'> 

          {icons.slice(window[0], window[1]).map((icon, idx) => 
            <div key={idx} className='carousel-cont' onClick={e =>handleOnClick(e, icon.key)}>
              <button className={`carousel-buttons`} >
                <img className='carousel-image' src={icon.photo} />
              </button> 
            <p className='carousel-button-title'>{icon.title}</p>
          </div> 
        )} 

        </div>
        {/* <div className='carousel-lr-cont'>
            <button className="carousel-lr-btn udc" onClick={e =>handleLRClick(e, 'left')}>
                <ButtonLeft/>
            </button>
            <button className="carousel-lr-btn udc" id="carousel-r-btn" onClick={e =>handleLRClick(e, 'right')} >
              <ButtonRight/>
            </button> 
        </div> */}
        
    </div>
  

  )
}

export default OptionsCarousel