import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Pickup.css"
const OptionsGridItem = ({ restaurant }) => {

  return (
    <>
      <NavLink to={`/restaurantListing/${restaurant.id}`}>
        <div className='options-body udc fdc'>
          {/* //comment out the below line and comment in the one below itfor temporarily disabling pictures */}
          <img className='options-image' src={restaurant.imageUrl} />
          {/* <img className='options-image' src={null} /> */}

          <div className='info-container'>
            <div>
              <h3 className='restaurant-name'>{restaurant.name}</h3>
              <div className='listing-time-distance'>In your area</div>
            </div>
            <span className='grey-button-no-shad rating-button udc'>{restaurant.rating}</span>
          </div>
        </div>
      </NavLink>
    </>
  )
}


export default OptionsGridItem
