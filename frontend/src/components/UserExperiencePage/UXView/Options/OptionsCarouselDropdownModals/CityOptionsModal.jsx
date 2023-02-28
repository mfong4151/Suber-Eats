import React, { useState } from 'react'
import './OptionsModals.css'
import { suberEatsCities } from './utils/suberEatsCities'

const CityOptionsModal = ({cityModal, setCityModal}) => {
  const [clickedCity, setClickedCity] = useState('')
  const suberCities = suberEatsCities()
  if (cityModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')
     

  return (
    <div className='modal'>
        <div className='modal-overlay city-modal-overlay' onClick={()=>setCityModal(!cityModal)}>
          <div className='univ-options-body city-modal-body'>
                <h1 id='city-modal-header'>Take a look at other cities!</h1>
                <div id='city-options'>
                    {Object.keys(suberCities).map((city, idx) =>
                    <div key={idx}>
                        <p>
                            {city}
                        </p>
                        <button onClick={()=>setClickedCity(city)}>
                            Look Here!
                        </button>
                    </div>
                    )}

                </div>
          </div>
        </div>
    </div>
  )

}

export default CityOptionsModal;