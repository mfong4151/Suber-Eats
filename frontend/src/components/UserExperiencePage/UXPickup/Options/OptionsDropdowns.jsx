import React from 'react'
import ChevronDown from '../SVGs/ChevronDown'
import '../Pickup.css'
import SortOptionsModal from './OptionsCarouselDropdownModals/SortOptionsModal'
import { useState } from 'react'
import { sortModalStyles, priceModalStyles, ratingModalStyles } from './OptionsCarouselDropdownModals/modalStyles'

const OptionsDropdowns = () => {
  const [ sortModal,setSortModal] = useState(false)
  const [ priceModal,setPriceModal] = useState(false)
  const [ ratingModal,setRatingModal] = useState(false)


  const toggleSortOptions =  e =>{
    e.preventDefault()
    e.stopPropagation()
    setSortModal(prev=> !prev)
  }

  const togglePriceOptions =  e =>{
    e.preventDefault()
    e.stopPropagation()
    setPriceModal(prev=> !prev)

  }


  const toggleRatingOptions =  e =>{
    e.preventDefault()
    e.stopPropagation()
    setRatingModal(prev=> !prev)
  }

  
  return (
    <div className='pickup-btns'>
      <button className="btn-round ux-buttons ux-sort-buttons" onClick={toggleSortOptions}>
        <span className='udc' onClick={toggleSortOptions}>
          Sort
        </span>
        <ChevronDown toggleOptions={toggleSortOptions}/>
      </button>

      <button className="btn-round ux-buttons ux-sort-buttons" onClick={togglePriceOptions} value="price" >
        <span onClick={togglePriceOptions}>Price Range</span>
        <ChevronDown toggleOptions={togglePriceOptions}/>
        </button>
      <button className="btn-round ux-buttons ux-sort-buttons" onClick={toggleRatingOptions} value="rating" >
        <span onClick={toggleRatingOptions}>Highest Rated</span>
        <ChevronDown toggleOptions={toggleRatingOptions}
        />
      </button>
      {/* <button className="btn-round ux-buttons ux-sort-buttons"><span>From Suber Eats</span><ChevronDown/></button> */}
      {sortModal  && <SortOptionsModal sortModal={sortModal} setSortModal={setSortModal} styleOptions={sortModalStyles}/>}
      {priceModal  && <SortOptionsModal sortModal={priceModal} setSortModal={setPriceModal} styleOptions={priceModalStyles}/>}
      {ratingModal && <SortOptionsModal sortModal={ratingModal} setSortModal={setRatingModal} styleOptions={ratingModalStyles}/>}
    </div>
  )
}

export default OptionsDropdowns

{/* <select name='deliver-now'>
  <option value="deliver-now">Deliver now</option>
  <option value="schedule-for-later">Schedule for later</option>
</select>  */}

