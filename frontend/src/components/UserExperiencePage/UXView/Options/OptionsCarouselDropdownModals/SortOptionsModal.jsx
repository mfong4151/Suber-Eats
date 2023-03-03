import React from 'react'
import './OptionsModals.css'
import SortModal from './SortModal'
import RatingModal from './RatingModal'
import PriceRangeModal from './PriceRangeModal'


const SortOptionsModal = ({sortModal, setSortModal, styleOptions, filterState}) => {

  const {filterOptions, setFilterOptions} = filterState;
  const {filterType,modal, activeModal,  modalOverlay, modalMenuContent} = styleOptions();
  

  if (sortModal) document.body.classList.add(activeModal)
  else document.body.classList.remove(activeModal)


  return (
    <div className={modal}>
        <div className={modalOverlay} onClick={()=>setSortModal(!sortModal)}>
          <div className={modalMenuContent}>
              {filterType === 'sort' && <SortModal filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>}             
              {filterType === 'price' && <PriceRangeModal filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>}            
              {/* {filterType === 'rating' && <RatingModal/>} */}
          </div>
        </div>
    </div>
  )

}

export default SortOptionsModal;