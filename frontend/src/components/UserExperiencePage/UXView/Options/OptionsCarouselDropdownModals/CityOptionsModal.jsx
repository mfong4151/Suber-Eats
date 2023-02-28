import React, { useState } from 'react'
import './OptionsModals.css'

const CityOptionsModal = ({cityModal, setCityModal}) => {
  const [clickedCity, setClickedCity] = useState('')


  if (cityModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

  
  return (
    <div className='modal'>
        <div className='modal-overlay' onClick={()=>setCityModal(!cityModal)}>
          <div className='city-modal-content'>

          </div>
        </div>
    </div>
  )

}

export default CityOptionsModal;