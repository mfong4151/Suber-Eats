import React from 'react'
// import { useSelector } from 'react-redux'
import OptionsGridItem from './OptionsGridItem'
import mockListingsLoader from '../../utils/mockItems'

const OptionsGrid = () => {

  // const gridItems = useSelector(state => getRestaurants)

  //Delete this once we get redux images running
  const gridItems = mockListingsLoader()

  return (

    <div id='options-array'>
        {gridItems.map((listing, idx) =>
          <OptionsGridItem listing={listing} key={idx}/>
        )}

      
    </div>
  )
}

export default OptionsGrid
