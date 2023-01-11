import React from 'react'
// import { useSelector } from 'react-redux'
import OptionsGridItem from './OptionsGridItem'

const OptionsGrid = ({restaurants}) => {

  // const gridItems = useSelector(state => getRestaurants)
  // return (

  //   <div id='options-array'>
  //       {gridItems.map((listing, idx) =>
  //         <OptionsGridItem listing={listing} key={idx}/>
  //       )}      
  //   </div>
  // )

  return (

    <div id='options-array'>
        {restaurants.map((restaurant, idx) =>
          <OptionsGridItem restaurant={restaurant} key={idx}/>
        )}

      
    </div>
  )
}

export default OptionsGrid
