import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import './UserMenuModal.css'
import { useDispatch } from 'react-redux';
import { logout } from './../../store/session';
import { useLocation } from 'react-router-dom';
import FavoritesIcon from './SVGs/FavoritesIcon';
import OrdersIcon from './SVGs/OrdersIcon';
import WalletIcon from './SVGs/WalletIcon';
import HelpIcon from './SVGs/HelpIcon';
import Promotions from './SVGs/Promotions';
import InviteFriendsIcon from './SVGs/InviteFriendsIcon';
import univPhotos from '../assets/photoExport'

const UserMenuModal = ({modalStates}) => {
  const {menuModal, setMenuModal} = modalStates;
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const {linkedin, gitHubBlack} = univPhotos()
  
  if (menuModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')
  
  const onMain = location.pathname === '/'


  const signOut = (e) => {
    e.preventDefault();
    dispatch(logout());

  };

  const signIn = e =>{
    e.preventDefault();
    history.push('/login')
    
  }

  return (
    <div className="modal">
        <div className='modal-overlay' onClick={()=> setMenuModal(!menuModal)}>
          <div className="modal-menu-content">
              {
                !onMain && 
                  <NavLink to={'/yourorders'} className="modal-item-univ modal-menu-button">
                    <div className='menu-modal-icon'>
                      <OrdersIcon/>

                    </div>
                    Orders
                </NavLink>
              }
              <div className="modal-item-univ modal-menu-button">
                <div className='menu-modal-icon'>
                  <WalletIcon/>
                </div>
                Contact me
              </div>
              <div className="modal-item-univ modal-menu-button">
                <div className='menu-modal-icon'>
                  <img src={linkedin} className='github-linkedin'/>
                </div>
                <a href="https://www.linkedin.com/in/mfong415/" target="_blank" onClick={e=> {e.stopPropagation()}}>My Linkedin</a>
              </div>

              <div className="modal-item-univ modal-menu-button">
                <div className='menu-modal-icon'>
                  <img src={gitHubBlack} className='github-linkedin'/>
                </div>

                <a  href="https://www.github.com/mfong4151/" target="_blank" className='a-link-spacing' onClick={e=> {e.stopPropagation()}}>My github</a>
              </div>
              
              <div className="modal-item-univ modal-menu-button">
                <div className='menu-modal-icon'>

                  <HelpIcon/>                
                  </div>
                  My personal site
              </div>
              
              {onMain && <button className='modal-menu-button sign-out' onClick={signIn}><span>Sign In</span></button>}
              {!onMain && <button className='modal-menu-button sign-out' onClick={signOut}><span>Sign Out</span></button>}
              
              <hr className="divider-slim"/>
             
             
          </div>

        </div>
    </div>
  )
}

export default UserMenuModal
