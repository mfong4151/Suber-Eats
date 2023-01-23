import React from 'react'
import OptionsGridItem from './OptionsGridItem'

const OptionsGrid = ({restaurants}) => {

  restaurants = restaurants.slice(0,20)
  return (

    <div id='options-array'>
        {restaurants.map((restaurant, idx) =>
          <OptionsGridItem restaurant={restaurant} key={idx}/>
        )}

      
    </div>
  )
}

export default OptionsGrid
