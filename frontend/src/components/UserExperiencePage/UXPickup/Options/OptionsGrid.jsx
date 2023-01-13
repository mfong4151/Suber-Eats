import React from 'react'
import OptionsGridItem from './OptionsGridItem'

const OptionsGrid = ({restaurants}) => {

  
  return (

    <div id='options-array'>
        {restaurants.map((restaurant, idx) =>
          <OptionsGridItem restaurant={restaurant} key={idx}/>
        )}

      
    </div>
  )
}

export default OptionsGrid
