import React from 'react'
import './OptionsModals.css'
import SortModal from './SortModal'
import RatingModal from './RatingModal'
import PriceRangeModal from './PriceRangeModal'

const SortOptionsModal = ({sortModal, setSortModal, styleOptions}) => {
  const {filterType,modal, activeModal,  modalOverlay, modalMenuContent} = styleOptions();
  
  if (sortModal) document.body.classList.add(activeModal)
  else document.body.classList.remove(activeModal)

  const preventBubbling = e => {
    e.preventDefault();
    e.stopPropogation();
  }

  return (
    <div className={modal}>
        <div className={modalOverlay} onClick={()=>setSortModal(!sortModal)}>
          <div className={modalMenuContent}>
              {filterType === 'sort' && <SortModal/>}             
              {filterType === 'price' && <PriceRangeModal/>}            
              {/* {filterType === 'rating' && <RatingModal/>} */}
          </div>
        </div>
    </div>
  )

}

export default SortOptionsModal;