import React from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch } from 'react-redux';

const MODALNAME = () => {

  //grab the context variable that makes sense from here
  const {} = useContext(UXContext)
  //use dispatch if necessary
  const dispatch = useDispatch()

  
  //controlling overflow
  if () document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')


  //css classes for our modals:
  //modal
  //modal-overlay
  //modal-item-univ modal-button

  return (
    <div className="modal">
        <div className='modal-overlay' onClick={}>
          <div className="modal-content">
           
          </div>

        </div>
    </div>
  )
}

export default MODALNAME
