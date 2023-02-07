import React, { useContext } from 'react'
import { UXContext } from '../UXContext'
import { useHistory } from 'react-router-dom'
import MenuIcon from '../SVGs/MenuIcon'

//would need to take in the restaurant array as an argument
const CheckoutHeader = ({modalStates}) => {
    const {menuModal, setMenuModal} = modalStates;
    const history = useHistory()

    
    return (
        <header className="splash-header univ-padding">

        <div className="logo header-left">
              <button className='menu-modal' onClick={()=>setMenuModal(!menuModal)}>
                <MenuIcon/>
              </button>
      
              <div onClick={()=> history.push('/')}>
                    <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
              </div>
        </div>
        </header>
    )
}

export default CheckoutHeader