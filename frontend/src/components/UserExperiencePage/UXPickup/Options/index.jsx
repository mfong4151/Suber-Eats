import React from 'react';
import OptionsCarousel from './OptionsCarousel';
import OptionsDropdowns from './OptionsDropdowns';
import OptionsGrid from './OptionsGrid';
import '../Pickup.css'

const Options = () => {
  return (
    <div className='univ-padding' id="options-dimensions">
      <h1 className="subheader">Pickup nearby</h1>
      <OptionsDropdowns/>
      <OptionsCarousel/>
      <OptionsGrid/>
    </div>
  )
}

export default Options;
