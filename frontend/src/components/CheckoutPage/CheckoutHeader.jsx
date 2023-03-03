import React from 'react'
import { useHistory } from 'react-router-dom'
import MenuIcon from '../SVGs/MenuIcon'
import './CheckoutPage.css'

//would need to take in the restaurant array as an argument
const CheckoutHeader = ({modalStates}) => {
    const {menuModal, setMenuModal} = modalStates;
    const history = useHistory()

    
    return (
        <header className="splash-header univ-padding">

        <div className="logo header-left" id='checkout-header'>
              <button className='menu-modal' onClick={()=>setMenuModal(!menuModal)}>
                <MenuIcon/>
              </button>
      
              <div className='logo-holder' id='checkout-logo' onClick={()=> history.push('/')}>
                    <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
              </div>
        </div>
        </header>
    )
}

export default CheckoutHeader