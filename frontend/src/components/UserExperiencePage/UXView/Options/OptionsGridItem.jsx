import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Pickup.css"
const OptionsGridItem = ({restaurant}) => {
  
  const timeDistance = 'In your area';
  return (
    <div className="options-listing">
      <NavLink to={`/restaurantListing/${restaurant.id}`}>
        <div className='options-body'>
         <img className='options-image' src={restaurant.imageUrl} />
         {/* //comment in for temporarily disabling pictures */}
         {/* <img className='options-image' src={null} /> */}

        <div className='info-container'>
          <div>
             <h3 className='restaurant-name' id="rest-name">{restaurant.name}</h3>
              <div className='listing-time-distance'>{timeDistance}</div>
              </div>
          <span className='grey-button rating-button udc'>{restaurant.rating}</span>
        </div>
      </div>
      </NavLink>
    </div>
  )
}


export default OptionsGridItem
