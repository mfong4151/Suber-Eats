import React,{ lazy } from 'react'
import OptionsGridItem from './OptionsGridItem'

const OptionsGrid = ({restaurants}) => {
  return (restaurants.length > 0) 
  ?(

    <div id='options-array'>
        {restaurants.map((restaurant, idx) =>
          <OptionsGridItem restaurant={restaurant} key={idx}/>
        )}
    </div>
  )

  :( 
    <div id='options-grid'>
      <h2 id='options-null'>
        Sorry!
      </h2>
      <h3 id='null-text'>
        There don't seem to be any restaurants that meet your requirements!
      </h3>
      <h6 id="click-defaults-text">
        Click "Defaults" under sort to try again.
      </h6>

    </div>
  )
}

export default OptionsGrid
