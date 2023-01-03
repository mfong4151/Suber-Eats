import React from 'react'
import ChevronDown from '../SVGs/ChevronDown'
import '../Pickup.css'
const OptionsDropdowns = () => {
  return (
    <div className='pickup-btns'>
      <button className="btn-round ux-buttons ux-sort-buttons"><span>Sort</span><ChevronDown/></button>
      <button className="btn-round ux-buttons ux-sort-buttons"><span>From Suber Eats</span><ChevronDown/></button>
      <button className="btn-round ux-buttons ux-sort-buttons"><span>Price Range</span><ChevronDown/></button>
      <button className="btn-round ux-buttons ux-sort-buttons"><span>Dietary</span><ChevronDown/></button>

    </div>
  )
}

export default OptionsDropdowns

{/* <select name='deliver-now'>
  <option value="deliver-now">Deliver now</option>
  <option value="schedule-for-later">Schedule for later</option>
</select>  */}
