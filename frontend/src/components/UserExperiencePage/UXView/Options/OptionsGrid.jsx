import React from 'react'
import OptionsGridItem from './OptionsGridItem'

const OptionsGrid = ({restaurants}) => {
  if (restaurants.length > 0) return (

    <div id='options-array'>
        {restaurants.map((restaurant, idx) =>
          <OptionsGridItem restaurant={restaurant} key={idx}/>
        )}
    </div>
  )

  else return( 
    <div>
      <h2 id='options-null'>
        Sorry!
      </h2>
      <h3 id='null-text'>
        There don't seem to be any restaurants that meet your requirements!
      </h3>
      <h6>
        Click "Defaults" under sort to try again.
      </h6>

    </div>
  )
}

export default OptionsGrid
