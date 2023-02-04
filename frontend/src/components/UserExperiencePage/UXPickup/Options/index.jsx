import React from 'react';
import OptionsCarousel from './OptionsCarousel';
import OptionsDropdowns from './OptionsDropdowns';
import OptionsGrid from './OptionsGrid';
import '../Pickup.css'

const Options = ({restaurants, filterOptions, setFilterOptions}) => {
  
  return (
    <div className='univ-padding' id="options-dimensions">
      <h1 className="subheader">Delivery nearby</h1>
      <OptionsDropdowns filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
      <OptionsCarousel filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
      <OptionsGrid restaurants={restaurants}/>
    </div>
  )
}

export default Options;
