import React from 'react'
import ChevronDown from '../SVGs/ChevronDown'
import '../Pickup.css'
import SortOptionsModal from './OptionsCarouselDropdownModals/SortOptionsModal'
import { useState } from 'react'
import { sortModalStyles, priceModalStyles, ratingModalStyles } from './OptionsCarouselDropdownModals/modalStyles'

const OptionsDropdowns = ({filterOptions, setFilterOptions}) => {
  const [ sortModal,setSortModal] = useState(false)
  const [ priceModal,setPriceModal] = useState(false)
  const [cityModal, setCityModal] = useState(false)
  // const [ ratingModal,setRatingModal] = useState(false)


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

  const toggleCityOptions =  e =>{
    e.preventDefault()
    e.stopPropagation()
    setCityModal(prev=> !prev)
  }

  // //for future featuer
  // const toggleRatingOptions =  e =>{
  //   e.preventDefault()
  //   e.stopPropagation()
  //   setRatingModal(prev=> !prev)
  // }

  
  return (
    <div className='pickup-btns'>
      <button className={`btn-round ux-buttons ux-sort-buttons ${sortModal && `black-button`}`} onClick={toggleSortOptions}>
        <span className='udc' onClick={toggleSortOptions}>
          Sort
        </span>
        <ChevronDown toggleOptions={toggleSortOptions}/>
      </button>

      <button className={`btn-round ux-buttons ux-sort-buttons ${priceModal && `black-button`}`} onClick={togglePriceOptions} value="price" >
        <span onClick={togglePriceOptions}>Price range</span>
        <ChevronDown toggleOptions={togglePriceOptions}/>
      </button>


      <button className={`btn-round ux-buttons ux-sort-buttons ${cityModal && `black-button`}`} onClick={togglePriceOptions}>
        <span onClick={toggleCityOptions}>Change Cities</span>
        <ChevronDown toggleOptions={toggleCityOptions}/>
      </button>

      {sortModal  && <SortOptionsModal sortModal={sortModal} setSortModal={setSortModal} styleOptions={sortModalStyles} filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>}
      {priceModal  && <SortOptionsModal sortModal={priceModal} setSortModal={setPriceModal} styleOptions={priceModalStyles} filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>}
    
      
      {/* below commented out code is in the pipeline */}
      {/* <button className="btn-round ux-buttons ux-sort-buttons" onClick={toggleRatingOptions} value="rating" >
        <span onClick={toggleRatingOptions}>Rating</span>
        <ChevronDown toggleOptions={toggleRatingOptions}
        />
      </button> */}
      {/* <button className="btn-round ux-buttons ux-sort-buttons"><span>From Suber Eats</span><ChevronDown/></button> */}
     
      {/* {ratingModal && <SortOptionsModal sortModal={ratingModal} setSortModal={setRatingModal} styleOptions={ratingModalStyles}/>} */}
    </div>
  )
}

export default OptionsDropdowns
