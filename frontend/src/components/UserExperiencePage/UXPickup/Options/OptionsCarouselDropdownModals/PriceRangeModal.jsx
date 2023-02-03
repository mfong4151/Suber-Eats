import React from 'react'

const PriceRangeModal = ({modal, setModal}) => {
   
  
  if (modal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')
 
  return (
    <div className="modal">
        <div className='modal-overlay' onClick={setModal(!modal)}>
          <div className="modal-menu-content">
             
          </div>

        </div>
    </div>
  )

}

export default PriceRangeModal




