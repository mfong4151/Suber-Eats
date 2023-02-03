import React from 'react'
import './OptionsModals.css'

const SortModal = ({sortModal, setSortModal, styleOptions}) => {
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
              {filterType === 'sort' && true}             
              {filterType === 'price' && true}            
              {filterType === 'rating' && true}
          </div>
        </div>
    </div>
  )

}

export default SortModal;