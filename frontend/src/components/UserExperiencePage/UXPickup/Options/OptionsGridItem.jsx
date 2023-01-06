import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Pickup.css"
const OptionsGridItem = ({restaurant}) => {

  const timeDistance = '5-15 min 0.4mi';
  
  return (
    <div className="options-listing">
      <NavLink to={`/restaurantListing/${restaurant.id}`}>
        <div className='options-body'>
         {/* <img className='options-image' src={listing.photo} /> */}

        <h2 className='restaurant-name'>{restaurant.name}</h2>
        <div className='listing-time-distance'><img src="" />{timeDistance}</div>
      </div>
      </NavLink>
    </div>
  )
}


export default OptionsGridItem
