import React from 'react';
import OptionsCarousel from './OptionsCarousel';
import OptionsDropdowns from './OptionsDropdowns';
import OptionsGrid from './OptionsGrid';

const Options = () => {
  return (
    <div className='univ-padding'>
      <h1 className="subheader">Pickup Nearby</h1>
      <OptionsDropdowns/>
      <OptionsCarousel/>
    </div>
  )
}

export default Options;
