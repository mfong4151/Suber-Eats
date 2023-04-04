import React from 'react';
import OptionsCarousel from './OptionsCarousel';
import OptionsDropdowns from './OptionsDropdowns';
import OptionsGrid from './OptionsGrid';
import '../Pickup.css'

const Options = ({restaurants, filterState, mapState}) => {
  
  return (
    <div className='univ-padding univ-padding-mobile' id="options-dimensions">
      <h1 className="subheader">Delivery nearby</h1>
      <OptionsDropdowns filterState={filterState} mapState={mapState}/>
      <OptionsCarousel filterState={filterState}/>
      <OptionsGrid restaurants={restaurants}/>
    </div>
  )
}

export default Options;
