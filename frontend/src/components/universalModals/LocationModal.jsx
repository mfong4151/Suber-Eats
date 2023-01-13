import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch, useSelector } from 'react-redux';
import PickUpNow from './SVGs/PickUpNow';
import LocationIcon from './SVGs/LocationIcon';
import ExitButton from './SVGs/ExitButton.jsx'
import { checkUserLoc, fetchLocations } from '../../store/location';
import { updateLocation } from '../../store/location';
import { useHistory } from 'react-router-dom';
import { fetchRestaurants, removeRestaurants } from '../../store/restaurant';
import { useParams } from 'react-router-dom';

const LocationModal = ({userLocation}) => {

  const { locationModal, toggleLocationModal} = useContext(UXContext)
  const sessionUserId = useSelector(state => state.session.user.id)  
  const dispatch = useDispatch()
  const history = useHistory()
  let userLocObj = useSelector(checkUserLoc(sessionUserId))

  if (locationModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

  const handleSubmitAddress = e =>{
    e.preventDefault();
    e.stopPropagation();
    if(userLocObj){
     dispatch(updateLocation(
         {location:{
           latitude: userLocation.lat,
           longitude: userLocation.lng,
           userId: sessionUserId

          }}, userLocObj.id
          
     ))
     .then(()=> dispatch(fetchRestaurants()).then(
      ()=> toggleLocationModal()
      )
     )
  }}

  useEffect(()=>{
    dispatch(fetchLocations())

  }, [])

  //css classes for our modals:
  //modal
  //modal-overlay
  //modal-item-univ modal-button

  return (
    <div className="modal">
        <div className='modal-overlay' onClick={toggleLocationModal}>
          <div className="modal-loc-content">
              <div className='delivery-margin' id='exit-spacing'>
                <button><ExitButton/></button>
              </div>
              <div className='delivery-header'> 
                <h1 className='loc-pickup-details'>Find restaurants in your area</h1>
              </div>

              <div className='loc-options delivery-margin'>
                <div className='loc-icon-and-text'>
                  <LocationIcon/>
                  <div className='delivery-address'>
                    <div className='loc-sub-options'>
                      <h2 className='menu-loc-option-text'>Delivery Address: {userLocation?.lat}, {userLocation?.lng}</h2>
                    </div>
                  </div>
                </div> 
                
                <button className='btn-round-two enter-address grey-button' onClick={handleSubmitAddress}><span>Submit Address</span></button>
              </div>

              <div className='loc-options delivery-margin'>
                <div className='loc-icon-and-text'>
                  <PickUpNow/> 
                  <div className=' udc'>
                      <h2 className='menu-loc-option-text'>Now</h2>
                  </div>
                </div>  
                <button className='btn-round-two loc-buttons grey-button udc'><span>Schedule</span></button>

              </div>

               
              <div className="udc">
                <button className='loc-done button-sq udc'><span>Done</span></button>
              </div>

          </div>

        </div>
    </div>
  )
}

export default LocationModal;
