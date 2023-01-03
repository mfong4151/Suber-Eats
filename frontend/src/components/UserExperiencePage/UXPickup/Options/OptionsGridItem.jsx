import React from 'react'
import "../Pickup.css"
const OptionsGridItem = ({listing}) => {
  const rating = 6.9;
  const timeDistance = '5-15 min 0.4mi';
  
  return (
    <div className="options-listing">
      <div className='options-body'>
         <img className='options-image' src={listing.photo} />

        <h2 className='restaurant-name'>{listing.title}</h2>
        <div className='listing-time-distance'><img src="" />{timeDistance}</div>
      </div>
    </div>
  )
}


export default OptionsGridItem
