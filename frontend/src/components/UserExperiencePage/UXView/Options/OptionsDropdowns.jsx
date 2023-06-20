import React,  { useState, useRef } from 'react'
import ChevronDown from '../SVGs/ChevronDown'
import '../Pickup.css'
import SortOptionsModal from './OptionsCarouselDropdownModals/SortOptionsModal'
import { sortModalStyles, priceModalStyles, ratingModalStyles, cityModalStyles } from './OptionsCarouselDropdownModals/modalStyles'
import CityOptionsModal from './OptionsCarouselDropdownModals/CityOptionsModal'
import extractOffsets from './utils/extractOffsets'
const OptionsDropdowns = ({filterState, mapState}) => {
  const [ sortModal,setSortModal] = useState(false)
  const [ priceModal,setPriceModal] = useState(false)
  const [cityModal, setCityModal] = useState(false)
  const sortRef = useRef(null) ;
  const priceRef = useRef(null);
  const citiesRef = useRef(null);


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
      <button id='sort-button' className={`btn-round-two ux-buttons udc grey-button ${sortModal && `black-button`} ux-sort-buttons`} onClick={toggleSortOptions} ref={sortRef}>
        <span className='udc' onClick={toggleSortOptions}>
          Sort
        </span>
        <ChevronDown toggleOptions={toggleSortOptions}/>
      </button>

      <button id='price-range-button' className={`btn-round-two ux-buttons udc grey-button ${priceModal && `black-button`} ux-sort-buttons`} onClick={togglePriceOptions} value="price"  ref={priceRef}>
        <span onClick={togglePriceOptions}>Price range</span>
        <ChevronDown toggleOptions={togglePriceOptions}/>
      </button>


      <button id='change-cities-button' className={`btn-round-two ux-buttons udc grey-button ${cityModal && `black-button`} ux-sort-buttons`} onClick={toggleCityOptions}  ref={citiesRef}>
        <span onClick={toggleCityOptions}>Change Cities</span>
        <ChevronDown toggleOptions={toggleCityOptions}/>
      </button>

      {sortModal  && <SortOptionsModal sortModal={sortModal} setSortModal={setSortModal} styleOptions={sortModalStyles} filterState={filterState} btnParent={sortRef.current}/>}
      {priceModal  && <SortOptionsModal sortModal={priceModal} setSortModal={setPriceModal} styleOptions={priceModalStyles}  filterState={filterState} btnParent={priceRef.current}/>}
      {cityModal && <CityOptionsModal cityModal={cityModal} setCityModal={setCityModal} mapState={mapState} btnParent={citiesRef.current}/>}
      
     
    </div>
  )
}

export default OptionsDropdowns
