import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch } from 'react-redux';
import { logout } from './../../store/session';
import FavoritesIcon from './SVGs/FavoritesIcon';
import OrdersIcon from './SVGs/OrdersIcon';
import WalletIcon from './SVGs/WalletIcon';
import HelpIcon from './SVGs/HelpIcon';
import Promotions from './SVGs/Promotions';
import InviteFriendsIcon from './SVGs/InviteFriendsIcon';
import univPhotos from '../assets/photoExport'

const UserMenuModal = () => {

  const {menuModal, toggleMenuModal} = useContext(UXContext)
  const dispatch = useDispatch()
  const {linkedin, gitHubBlack} = univPhotos()
  
  if (menuModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')
  const signOut = (e) => {
    e.preventDefault();
    dispatch(logout());

  };
  return (
    <div className="modal">
        <div className='modal-overlay' onClick={toggleMenuModal}>
          <div className="modal-menu-content">
              <div className="modal-item-univ modal-menu-button"><NavLink to={'/yourorders'}><OrdersIcon/>Orders</NavLink></div>
              {/* <div className="modal-item-univ modal-menu-button"><FavoritesIcon/>Favorites</div> */}
              <div className="modal-item-univ modal-menu-button"><WalletIcon/>Contact me</div>
              <div className="modal-item-univ modal-menu-button">
                <img src={linkedin} className='github-linkedin'/>
                <a href="https://www.linkedin.com/in/mfong415/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>My Linkedin</a>
              </div>
              <div className="modal-item-univ modal-menu-button">
                <img src={gitHubBlack} className='github-linkedin'/>
                <a  href="https://www.github.com/mfong4151/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>My github</a>
              </div>
              
              <div className="modal-item-univ modal-menu-button"><HelpIcon/>My personal site</div>
              {/* <div className="modal-item-univ modal-menu-button"><Promotions/>Promotions</div> */}
              {/* <div className="modal-item-univ modal-menu-button"><InviteFriendsIcon/>Invite friends</div> */}
              <button className='modal-menu-button sign-out' onClick={signOut}><span>Sign Out</span></button>
              <hr className="divider-slim"/>
              {/* <div className="modal-item-univ modal-menu-text-options">Create a business account</div>
              <div className="modal-item-univ modal-menu-text-options">Add your restaurant</div>
              <div className="modal-item-univ modal-menu-text-options">Sign up to deliver</div>

              <div className='phone-buttons'>
                <button className="btn-round ux-buttons">iPhone</button>
                <button className="btn-round ux-buttons">Android</button>
              </div> */}
          </div>

        </div>
    </div>
  )
}

export default UserMenuModal
