import React from 'react'
import star from './assets/star_rating_dark.png'

const RestaurantInfo = ({restaurant}) => {
  return (
    <div className="listing-info">
      <div className='univ-padding'>
        <h1 className='restaurant-name '>{restaurant?.name}</h1>
      </div>
      <div className='restaurant-info univ-padding'>
        <div className='menu-row-1'>
          <img src={star} alt='star' className="star listing-text-spacing"/>
          <span className='listing-text-spacing'>{restaurant?.rating}</span>
          <span className='listing-text-spacing'></span>
          <span className='listing-text-spacing'>•</span>
          <span className='listing-text-spacing'>{restaurant?.cuisineType.toUpperCase().slice(0,1).concat(restaurant?.cuisineType.slice(1))}</span>
          <span className='listing-text-spacing'>•</span>
          {/* <img src={univPhotos.uberOne} className="uber-one-logo"/> */}
          <span className='listing-text-spacing'>Read the reviews</span>
          <span className='listing-text-spacing'>•</span>
          {/* <span className='listing-text-spacing' >More Info</span> */}

      </div>
      <div className="menu-row-1 menu-row-2">
        Open at some point
      </div>
      {/* <div className="menu-row-1 menu-row-2">
        Tap for hours, info, and more
      </div> */}
    </div>

  </div>
  )
}

export default RestaurantInfo
