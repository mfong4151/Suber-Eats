import React from 'react'
import ChevronDown from '../SVGs/ChevronDown'
import '../Pickup.css'
import SortModal from './OptionsCarouselDropdownModals/SortModal'
import RatingModal from './OptionsCarouselDropdownModals/RatingModal'
import PriceRangeModal from './OptionsCarouselDropdownModals/PriceRangeModal'
import { useState } from 'react'

const OptionsDropdowns = () => {
  const [ sortModal,setSortModal] = useState('')


  const limitChildEle = e =>{
    e.preventDefault();
    e.stopPropagation()
  }

  const toggleSortOptions = e =>{
    e.preventDefault()
    e.stopPropagation()
    setSortModal('sort')
    console.log(sortModal)
  }


  return (
    <div className='pickup-btns'>
      <button className="btn-round ux-buttons ux-sort-buttons" onClick={toggleSortOptions} value="sort" >
        <span>
          Sort
        </span>
        
        <ChevronDown/>

      </button>
      <button className="btn-round ux-buttons ux-sort-buttons" onClick={toggleSortOptions} value="price" >
        <span>Price Range</span><ChevronDown/>
        </button>
      <button className="btn-round ux-buttons ux-sort-buttons" onClick={toggleSortOptions} value="rating" >
        <span>Highest Rated</span><ChevronDown/>
      </button>
      {/* <button className="btn-round ux-buttons ux-sort-buttons"><span>From Suber Eats</span><ChevronDown/></button> */}
      {sortModal && <SortModal/>}
      {/* {priceRangeModal && <PriceRangeModal/>}
      {ratedModal && < RatingModal/>} */}
    </div>
  )
}

export default OptionsDropdowns

{/* <select name='deliver-now'>
  <option value="deliver-now">Deliver now</option>
  <option value="schedule-for-later">Schedule for later</option>
</select>  */}

