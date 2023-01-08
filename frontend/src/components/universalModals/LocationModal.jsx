import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch } from 'react-redux';
import PickUpNow from './SVGs/PickUpNow';
const LocationModal = () => {

  //grab the context variable that makes sense from here
  const { locationModal, setLocationModal, toggleLocationModal, userLocation, setUserLocation } = useContext(UXContext)

  //use dispatch if necessary
  const dispatch = useDispatch()

  
  //controlling overflow
  if (locationModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')


  //css classes for our modals:
  //modal
  //modal-overlay
  //modal-item-univ modal-button

  return (
    <div className="modal">
        <div className='modal-overlay' onClick={toggleLocationModal}>
          <div className="modal-loc-content">
    
              <div>
                <h1 className='loc-pickup-details'>Pickup Details</h1>
              </div>

              <div className="loc-options">
                  <h2 className='menu-loc-option-text'>Pick Up Now</h2>
                  <button className='btn-round loc-buttons'>Schedule</button>
              </div>
              <div className="loc-options">
                  <div>
                    <PickUpNow/> 
                    <h2 className='menu-loc-option-text'>Pick Up Now</h2>
                    <button className='btn-round loc-buttons'>Schedule</button>
                  </div>
              </div>
              <button className='loc-done button-sq univ-padding'><span>Done</span></button>
          </div>

        </div>
    </div>
  )
}

export default LocationModal
