import React from 'react';
import OptionsCarousel from './OptionsCarousel';
import OptionsDropdowns from './OptionsDropdowns';
import OptionsGrid from './OptionsGrid';
import '../Pickup.css'

const Options = ({restaurants}) => {
  
  return (
    <div className='univ-padding' id="options-dimensions">
      <h1 className="subheader">Delivery nearby</h1>
      <OptionsDropdowns/>
      <OptionsCarousel/>
      <OptionsGrid restaurants={restaurants}/>
    </div>
  )
}

export default Options;
