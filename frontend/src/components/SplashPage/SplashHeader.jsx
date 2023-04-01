import React from 'react'
import "./SplashPage.css"
import {useHistory} from 'react-router-dom'
import MenuIcon from '../SVGs/MenuIcon'
const SplashHeader = ({modalStates}) => {
  const {menuModal, setMenuModal} = modalStates;
  const history = useHistory();

  const goToLogin = ()=>{
    history.push('/login')
  }

  
  return (
     <header id="splash-header" className="univ-padding">

        <div className="logo header-left" id='splash-header-left'>
              <button className='menu-modal minimal-header-padding' onClick={()=> setMenuModal(!menuModal)}>
                <MenuIcon/>
              </button>
      
              <div id='logo-holder'>
                    <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
              </div>

        </div>
        


        <div id="user-auth-buttons">
            <button className="btn-round header-btn-round grey-button" onClick={goToLogin}>
              
              Log In
              </button>
            <button className='btn-round header-btn-round black-button' onClick={goToLogin}>Sign Up</button>
        </div>

       </header>
  )
}

export default SplashHeader
