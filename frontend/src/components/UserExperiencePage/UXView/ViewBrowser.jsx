import React from 'react'
import Options from './Options'
import Map from './GoogleMap'
const ViewBrowser = ({restaurantsHeap, filterState, mapState}) => {
  return (
    <>
        <Options restaurants={restaurantsHeap} filterState={filterState} mapState={mapState}/>
        <Map restaurants={restaurantsHeap} mapState={mapState} /> 
      </>
  )
}

export default ViewBrowser
