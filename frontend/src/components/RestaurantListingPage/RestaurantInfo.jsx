import React from 'react'
import star from './assets/star_rating_dark.png'

const RestaurantInfo = ({restaurant, reviewRef}) => {

  return (
    <div className="listing-info">
      <div className='univ-padding'>
        <h1 className='restaurant-listing-name'>{restaurant?.name}</h1>
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
          <span className='listing-text-spacing line-text-hoverable' onClick={()=>{reviewRef.current.scrollIntoView({behavior:'smooth'})}}>Read the reviews</span>
          {/* <span className='listing-text-spacing' >More Info</span> */}

      </div>
      <div className="menu-row-1 menu-row-2">
        Open at some point
      </div>
      <div className="menu-row-1 menu-row-2">
        {restaurant?.address.split(',').slice(0,3).join(' ,')}
      </div>
      {/* <div className="menu-row-1 menu-row-2">
        Tap for hours, info, and more
      </div> */}
    </div>

  </div>
  )
}

export default RestaurantInfo
