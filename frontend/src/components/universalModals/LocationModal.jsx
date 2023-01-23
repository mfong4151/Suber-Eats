import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import ExitButton from './SVGs/ExitButton.jsx'

const LocationModal = () => {

  const { locationModal, toggleLocationModal} = useContext(UXContext)


  if (locationModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')


  return (
    <div className="modal">
        <div className='modal-overlay' onClick={toggleLocationModal}>
          <div className="modal-loc-content">
              <div className='delivery-margin' id='exit-spacing'>
                <button><ExitButton/></button>
              </div>
              <div className='delivery-header'> 
                <h1 className='loc-pickup-details'>Using the Map</h1>
              </div>

              <div id='loc-modal-text'>
                <p>To use the map simply click anywhere on the map, our backend server will pick out all the locations within a 1-2 mile radius with restauraunts.</p>
                <p>See the preset cities tab for a list of all the cities that we have seed data for.</p>
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
