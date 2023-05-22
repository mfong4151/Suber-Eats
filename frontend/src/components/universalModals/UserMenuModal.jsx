import React from 'react'
import {motion} from "framer-motion"
import { NavLink, useHistory } from 'react-router-dom';
import './UserMenuModal.css'
import { useDispatch } from 'react-redux';
import { logout } from './../../store/session';
import { useLocation } from 'react-router-dom';
import OrdersIcon from './SVGs/OrdersIcon';
import WalletIcon from './SVGs/WalletIcon';
import HelpIcon from './SVGs/HelpIcon';
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

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    navigator.clipboard.writeText('mfong415@gmail.com');
    alert(`Email copied to clipboard: mfong415@gmail.com`);
  };

  const signOut = (e) => {
    e.preventDefault();
    dispatch(logout());

  };

  const signIn = e =>{
    e.preventDefault();
    history.push('/login')
    
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
  };
  

  return (

      <div
        className="modal-overlay"
        onClick={() => setMenuModal(false)}
      >
      <motion.div
        className="modal-menu-content"
        variants={modalVariants}
        initial="hidden"
        animate={menuModal ? "visible" : "hidden"}
        exit="hidden"
      >
              {
                !onMain && 
                  <NavLink to={'/yourorders'} className="modal-item-univ modal-menu-button">
                    <div className='menu-modal-icon'>
                      <OrdersIcon/>

                    </div>
                    Orders
                </NavLink>
              }

              <div className="modal-item-univ modal-menu-button" onClick={handleOnClick}>
                <div className='menu-modal-icon'>
                  <WalletIcon/>
                </div>
                <p className='udc'> Contact me</p>
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
                  <a  
                      href="https://www.github.com/mfong4151/" 
                      target="_blank" 
                      className='a-link-spacing' 
                      onClick={e=> {e.stopPropagation()}}
                      >
                    My personal site
                  </a>

              </div>
              
              {onMain && <button className='modal-menu-button sign-out' onClick={signIn}><span>Sign In</span></button>}
              {!onMain && <button className='modal-menu-button sign-out' onClick={signOut}><span>Sign Out</span></button>}
              <div id='modal-close-cont' className='modal-item-univ modal-menu-button btn-round ux-buttons black-button'>
                <button id='modal-close-button' className='udc'>
                  Close 
                </button>

              </div>
              <hr className="divider-slim"/>
             
             
          </motion.div>

        </div>
  )
}

export default UserMenuModal
