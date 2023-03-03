import React, { useState } from 'react'
import './OptionsModals.css'
import { suberEatsCities } from './utils/suberEatsCities'
import {useDispatch, useSelector } from 'react-redux'
import { getSessionUserId } from '../../../../../store/session'
import { checkUserLoc, updateLocation } from '../../../../../store/location'
import { fetchRestaurants } from '../../../../../store/restaurant'

const CityOptionsModal = ({cityModal, setCityModal, mapState}) => {
  const [selectedButton, setSelectedButton] = useState('')
  const {mapCenter, setMapCenter} = mapState;
  const dispatch = useDispatch()
  const sessionUserId = useSelector(getSessionUserId)
  const userLocObj = useSelector(checkUserLoc(sessionUserId))


  const suberCities = suberEatsCities()
  if (cityModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')
  
  const handleChangeCity = (e, city) =>{
    e.preventDefault()
    e.stopPropagation()
    setSelectedButton(prev => city)
    const latLng = suberCities[city]
    const {lat, lng} = latLng;

    setMapCenter({lat, lng})

    if(userLocObj){
      dispatch(updateLocation(
          {location:{
            latitude: lat,
            longitude: lng,
            userId: sessionUserId
 
           }}, userLocObj.id
          ))
      .then(()=> dispatch(fetchRestaurants()))
    }

  }



  return (
    <div className='modal'>
        <div className='modal-overlay city-modal-overlay' onClick={()=>setCityModal(!cityModal)}>
          <div className='univ-options-body city-modal-body'>
                <h1 id='city-modal-header'>Take a look at other cities!</h1>
                <div id='city-options'>
                    {Object.keys(suberCities).map((city, idx) =>
                    <div key={idx} className="city-option">
                        <p>
                            {city}
                        </p>
                        <button className={`btn-round-two grey-button sort-modal-btn udc ${selectedButton === city && 'black-button'}`} onClick={e => handleChangeCity(e, city)}>
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