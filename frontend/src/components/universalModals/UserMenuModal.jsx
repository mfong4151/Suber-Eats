import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../store/session';
import FavoritesIcon from './SVGs/FavoritesIcon';
import OrdersIcon from './SVGs/OrdersIcon';
import WalletIcon from './SVGs/WalletIcon';
import HelpIcon from './SVGs/HelpIcon';
import Promotions from './SVGs/Promotions';
import InviteFriendsIcon from './SVGs/InviteFriendsIcon';
const UserMenuModal = () => {

  //
  const {menuModal, toggleMenuModal} = useContext(UXContext)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  
  if (menuModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')
  const signOut = (e) => {
    e.preventDefault();
    dispatch(logout());

  };
  return (
    <div className="modal">
        <div className='modal-overlay' onClick={toggleMenuModal}>
          <div className="modal-content">
              <div className="modal-item-univ modal-button"><NavLink to={'/yourorders'}><OrdersIcon/>Orders</NavLink></div>
              <div className="modal-item-univ modal-button"><FavoritesIcon/>Favorites</div>
              <div className="modal-item-univ modal-button"><WalletIcon/>Wallet</div>
              <div className="modal-item-univ modal-button"><HelpIcon/>Help</div>
              <div className="modal-item-univ modal-button"><Promotions/>Promotions</div>
              <div className="modal-item-univ modal-button"><InviteFriendsIcon/>Invite friends</div>
              <button className='modal-button sign-out' onClick={signOut}><span>Sign Out</span></button>
              <hr className="divider-slim"/>
              <div className="modal-item-univ modal-text-options">Create a business account</div>
              <div className="modal-item-univ modal-text-options">Add your restaurant</div>
              <div className="modal-item-univ modal-text-options">Sign up to deliver</div>

              <div className='phone-buttons'>
                <button className="btn-round ux-buttons">iPhone</button>
                <button className="btn-round ux-buttons">Android</button>
              </div>
          </div>

        </div>
    </div>
  )
}

export default UserMenuModal